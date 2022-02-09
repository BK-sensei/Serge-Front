import { useState, useEffect} from 'react'
import { useContext } from 'react'
import * as d3 from "d3";
import { UserContext } from '../contexts/User'; 
import { getProperties } from '../api/properties'
import { getLines } from '../api/lines'
import "../styles/components-style/linesColors.css"
import "../styles/components-style/map.css"
import idfMap from '../api/idfMap.geojson'
import parisMap from '../images/arrondissements.geojson'
import geoLines from "../api/geoLines.json"
import pawn from "../images/pions/pawn-blue.svg"

// const lodash = require("lodash")

const Map = () => {
    const { user } = useContext(UserContext)
    const [stationsData, setStationsData] = useState([])
    const [linesData, setLinesData] = useState([])
    const [mapCreated, setMapCreated] = useState(false)
    const [mapContainer, setMapContainer] = useState([])
    const [projection, setProjection] = useState([])
    const [mapState, setMapState] = useState("")
   
    

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
            if (mapCreated){
                createPawn()
            } else {
                console.log("map not created")
            }
    }, [mapCreated])


    const fetchData = async () => {
        const propertiesData = await getProperties()
        // console.log(propertiesData)
        setStationsData(propertiesData)
        
        const linesData = await getLines()
        // console.log(linesData)
        setLinesData(linesData)
    }

    const createPawn = () => {

        let median_x = d3.median(stationsData, d => d.latitude);
        let median_y = d3.median(stationsData, d => d.longitude);

        const projection = d3.geoMercator()
        .translate([0, 0])
        .scale(50000)
        .center([median_x, median_y])

    const path = d3.geoPath(projection)
            console.log("mapcreated")
            let mapTest = mapState
            const userX = 2.38244550268222
            const userY = 48.8949061258374
            


            const userPosition = mapTest.append("g")
                                .attr("transform", `translate(${projection([userX, userY])})`)

            userPosition.append("circle")
                    .attr("r", 2)
                    .attr("fill", "red") 

            console.log("mapcontainer",mapTest)
            console.log("zadzazad")
        
    }


    const createMap = () => {

        // Récupérer centre carte

        let median_x = d3.median(stationsData, d => d.latitude);
        let median_y = d3.median(stationsData, d => d.longitude);


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
                // .attr("preserveAspectRatio", "xMidYMid meet")
                .attr("class", "map")
        
        const g = svg.append("g")
    //    console.log("wtf",svg._groups[0][0])


       setMapState(svg._groups[0][0])
       setProjection(projection)

        // console.log("svg",svg._groups[0][0])
        console.log("projection",projection)


        // Dessin de la carte

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
            
          // contours de Paris
            g.selectAll("path")
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
                    .on("click", e => console.log(e.target.__data__))
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

        

        
        // console.log("projection", projection)

    }
        if (!mapContainer) {
            return <p>Loading</p>
        }

        console.log("mapcontainer",mapState)


    
        // // position joueur départ

        // const userX = 2.38244550268222
        // const userY = 48.8949061258374

        // const userPosition = mapContainer._groups.append("g")
        //     .attr("transform", `translate(${projection([userX, userY])})`)

        //     userPosition.append("circle")
        //         .attr("r", 2)
        //         .attr("fill", "red") 
      
        // const pawn = userPosition.append("image")
        //     // .attr("src", `${require('../images/pions/pawn-blue.png')}`)
        //     // .attr("xlink:href", "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-10/determiner-age-lapin-173456.jpg")
        //     .attr("height", 50)
        //     .attr("width", 50)
        //     .attr("x", -5 )
        //     .attr("y", -5 )
    

    return (
        <div className="background">
            <div id="mapContainer">
            </div>  
        </div>
    );
};

export default Map;
