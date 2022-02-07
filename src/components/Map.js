import { useState, useEffect } from 'react'
import * as d3 from "d3";

import { getProperties } from '../api/properties'
import { getLines } from '../api/lines'
import "../styles/components-style/linesColors.css"
import "../styles/components-style/map.css"
import parisMap from '../images/arrondissements.geojson'

// const lodash = require("lodash")

const Map = () => {
    const [stationsData, setStationsData] = useState([])
    const [linesData, setLinesData] = useState([])
    const [mapCreated, setMapCreated] = useState(false)

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
                .attr("viewBox", "-110 -110 220 220")
                .attr("preserveAspectRatio", "xMidYMid meet")
                .attr("class", "map")

        // const viewport = svg.append("g")
        //     .attr("id", "viewport")
        //     .attr("transform", "scale(1.5)")
            // // .call(d3.behavior.zoom()
            // //         .scale(1.5)
            // //         .scaleExtent([0.9, 3])
            // //         .on("zoom", function() {
            // //             viewport.attr("transform",
            // //                 "translate(" + d3.e.translate + ")" +
            // //                 " scale(" + d3.e.scale + ")"
            // //             );
            // //         })
            //         )



        // Dessin

        d3.json(parisMap).then(function(geojson) {   
            // contours de Paris
            const paris = svg.append("g")
                .selectAll("path")
                .data(geojson.features)
                    .enter()
                    .append("path")
                    .attr("d", path)
                    .attr("class", "parisContainer") 
                    .lower() 

            // dessin des stations
            const stations = svg.append("g")
                .selectAll('circle')
                .data(stationsData)
                    .join("circle")
                    .attr("transform", d => `translate(${projection([d.latitude, d.longitude])})`)
                    .attr("r", d => (d.range/3))
                    .attr("class", d => d.class)
                    .raise() 
                    .on("click", e => console.log(e))
                    .on('mouseover', function (d, i) {
                        d3.select(this)
                            .transition()
                            .attr("r", 4)
                        }
                            // .enter().append("div")
                            //     .attr("class", d => d.class)
                            //     .text(e => e.target.value.name)
                            //     .style("class", "stationName")
                            //     // .style("left", (d3.event.pageX) + "px")		
                            //     // .style("top", (d3.event.pageY - 28) + "px");	
                
                    )
                    .on("mouseout", function (d, i) {
                    d3.select(this).transition()
                        .attr("class", d => d.class)
                        .attr("r", d => (d.range/3));
                    }); 
                
        });

            // dessin des lignes

             // fusionner tableau lignes avec latitude / longitude du tableau station en fonction des noms 

            linesData.forEach(line => {
                const findStations = stationsData.find(station => station.keyName === line.paths[0][0])
                    // console.log(findStations)
                const stationPosition = [findStations.keyName,findStations.latitude,findStations.longitude]
                    console.log(stationPosition)
            })
           

            const line5 = {type: "LineString", coordinates: [[2.44962071744096, 48.9069699442981], [2.42480187771966, 48.8952689905167]]}
            const drawLines = d3.geoPath()
                .projection(projection)
                

            // svg.append("path")
            //     .data(linesData)
            //     .attr("d", d => drawLines(linesData))
            //     .attr("class", "line_5")
            //     .style("stroke-width", 1)
        
            
            // svg.selectAll("path")
            //     .data(stationsData)
            //     .enter().append("path")
            //     .attr("d", d3.geoPath(drawLine()))
            //     .attr("stroke", "black");

           

    }
    
    
    return (
        <div id="mapContainer">

        </div>   
    );
};

export default Map;


     // .style("color", function(d, i) {
            //     return d > 10 ? "#ff0000" : "#000";
            //   })
            //   .text(function(d, i){
            //       for (i=0; i<dataset.length; i++)
            //       {
            //           if(d > 10)
            //           {
            //             result = "black";
            //            }
            //            else
            //            {
            //             result = "white";
            //            }
            //       }
            //       return result;
            //   })


    // const gen_branch = function(d) {
    //     return d.linesData.map(function(p) { return {"key": key, "paths": p}; });
    // }


    // container_lines.selectAll()
    //     .selectAll(".line")
    //     .data(linesData)
    //     .enter()
    //         .append("g")
    //         .attr("class", line_class)

    // lines.selectAll(".line_branch")
    //     .data(gen_branch)
    //     .enter()
    //         .append("path")
    //         .attr("stroke", "black")
    //         // .attr("d", drawLine(properties, projection))
    //         // .on("mouseover", select_line)
    //         // .on("mouseout", deselect_line)
            