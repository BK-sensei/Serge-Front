import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../contexts/User'
import { CardPropertyContext } from '../contexts/CardProperty'
import * as d3 from "d3";

import { getProperties } from '../api/properties'
import { getLines } from '../api/lines'
import "../styles/components-style/linesColors.css"
import "../styles/components-style/map.css"
import idfMap from '../api/idfMap.geojson'
import parisMap from '../images/arrondissements.geojson'
import geoLines from "../api/geoLines.json"


const Map = () => {
    const { cardProperty, setCardProperty } = useContext(CardPropertyContext)
    const [stationsData, setStationsData] = useState([])
    const [linesData, setLinesData] = useState([])
    const [mapCreated, setMapCreated] = useState(false)
    const [svgState, setSvgState] = useState(null)
    const[medianX, setMedianX] = useState(null)
    const[medianY, setMedianY] = useState(null)
   
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {     
        if (stationsData.length > 0 && linesData.length > 0 && !mapCreated) {
            // console.log(stationsData)
            createMap()
            setMapCreated(true)
        }
    }, [stationsData,linesData])

    useEffect(() => {
        if (svgState && medianX && medianY) {
            createPawn(2.38244550268222, 48.8949061258374)
        }
    }, [svgState, medianX, medianY])


    const fetchData = async () => {
        const propertiesData = await getProperties()
        // console.log(propertiesData)
        setStationsData(propertiesData)
        
        const linesData = await getLines()
        // console.log(linesData)
        setLinesData(linesData)
    }


    const createMap = () => {

        // Récupérer centre carte
        let median_x = d3.median(stationsData, d => d.latitude);
        let median_y = d3.median(stationsData, d => d.longitude);

        setMedianX(median_x)
        setMedianY(median_y)

        // Projection carte
        const projection = d3.geoMercator()
            .translate([0, 0])
            .scale(50000)
            .center([median_x, median_y])

        const path = d3.geoPath(projection)
        // console.log(path)
       
        // Container carte
        const svg = d3.select("#mapContainer")
            .append("svg")
                .attr("viewBox", "-110 -130 260 260")
                .attr("class", "map")
                
        setSvgState(svg)
        
        const g = svg.append("g")
        // console.log(svg)
        // console.log(projection)


        // Dessin de la carte
        
        // fond contours communes IDF 
        const idf = d3.json(idfMap).then(function(data) {
            g.selectAll("path")
                .data(data.features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .attr("class", "idfContainer") 
                    .lower()
        })

        const paris = d3.json(parisMap).then(function(data) { 
            // fond contours de Paris
            const paris = g.selectAll("path")
                .data(data.features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .attr("class", "parisContainer") 

            // dessin des lignes
            const drawLines = d3.geoPath()
                .projection(projection)

            geoLines.forEach(geoLine => {
                g.append("path")
                    // .data(linesData)
                    .attr("d", drawLines(geoLine))
                    .attr("stroke", geoLine.color)
                    .style("fill", "none")
                    .style("stroke-width", 1)
            })

            // dessin des stations
            const stations =  g.selectAll('circle')
                .data(stationsData)
                    .join("circle")
                    .attr("transform", d => `translate(${projection([d.latitude, d.longitude])})`)
                    .attr("r", d => (d.range/3))
                    .attr("stroke-width", 0.4)
                    .attr("class", d => d.class)
                    .raise() 
                    .on("click", e => handleClick(e))
                    .on('mouseover', function (d, i) {
                        d3.select(this)
                            .transition()
                            .attr("r", 4)
                    })
                    .on("mouseout", function (d, i) {
                    d3.select(this).transition()
                        .attr("class", d => d.class)
                        .attr("r", d => (d.range/3));
                    }); 
     
            // zoom
            svg.call(d3.zoom()
                .extent([[0, 0], [280, 280]])
                .scaleExtent([1, 8])
                .on("zoom", zoomed));
        
            function zoomed({transform}) {
                svg.attr("transform", transform);
                // map.attr("path", 0,5 / Math.sqrt(transform.k));
                // stations.attr("r", d => (d.range/ 3 / Math.sqrt(transform.k)));
                // stations.on('mouseover', function (d, i) {
                //     d3.select(this)
                //         .transition()
                //         .attr("r", 2)
                //         .attr("cursor", "pointer")
                // })
                // stations.on("mouseout", function (d, i) {
                // d3.select(this).transition()
                //     .attr("r", d => (d.range / 3 / Math.sqrt(transform.k)));
                // });
            }
        });

   
    }
    // Récupérer les infos des stations 
    const handleClick = (e) => {
        console.log(e.target.__data__)
        setCardProperty(e.target.__data__)
    }   
    
    // Déplacer le pion  
    const createPawn = (lat, lng) => {
        const $pawn = document.getElementById("pawn")

        if ($pawn) {
            document.getElementById("pawn").innerHTML = ""
        }

        const projection = d3.geoMercator()
            .translate([0, 0])
            .scale(50000)
            .center([medianX, medianY])

       const userPosition = svgState.append("g")
            .attr("id", "pawn")
            .attr("transform", `translate(${projection([lat, lng])})`)

       userPosition.append("circle")
           .attr("r", 2)
           .attr("fill", "red") 
    }



    return (
        <div id="mapContainer" onClick={() => createPawn(2.30360515293852, 48.8792362487704)}>
        </div>       
    );
};

export default Map;


   