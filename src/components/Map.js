import { useState, useEffect } from 'react'
import * as d3 from "d3";

import { getProperties } from '../api/properties'
import "../styles/components-style/LinesColors.css"
import "../styles/components-style/Map.css"


const Map = () => {
    const [properties, setProperties] = useState([])
    // const [fillColor, setFillColor] = useState([])
    // const [strokeColor, setStrokeColor] = useState([])

    useEffect(() => {
       fetchProperties()
    }, [])

    const fetchProperties = async () => {
        const properties = await getProperties()
        setProperties(properties)
    }

    if (!properties) {
        return <p>en chargement</p>
    }

    // Récupérer centre carte
    let median_x = d3.median(properties, d => d.latitude);
    let median_y = d3.median(properties, d => d.longitude);


    // Container carte

    // const width = 1175
    // const height = 1218

    const svg = d3.select("#mapContainer")
        .append("svg")
            .attr("viewBox", "-110 -110 200 200")
            .attr("class", "mapContent")
            .attr("preserveAspectRatio", "xMidYMid meet")
    

    // Projection carte

    const projection = d3.geoMercator()
        .translate([0, 0])
        .scale(50000)
        // .center([2.347438242705927, 48.86237146731491])
        .center([median_x, median_y])
    
    const path = d3.geoPath(projection)
        

    // fonction Couleur

    const isHub = properties.map(property => property.isHub)
    console.log(isHub)
    
    const findStrokeColor = () => {    
        if (isHub) {
            return ("black") 
        } else {
            return ("red") 
        }    
    }

    const findFillColor = () => {  
        if (isHub) {
            return ("white") 
        } else {
            return ("black") 
        } 
    }
    

    // dessin des points

    svg.append("g")
        .selectAll('circle')
        .data(properties)
        .join("circle")
            .attr("transform", d => `translate(${projection([d.latitude, d.longitude])})`)
            .attr("r", 1)
            .attr("fill", d => findFillColor(d))
            .attr("stroke", d => findStrokeColor(d))
          

    // dessin des lignes

    // créer un tableau par ligne avec tous les noms des stations
    const linesData = properties.map(property => property.lines)
    console.log(linesData)
    
    // const line = svg.line()
    //     .interpolate("linear")

    // const drawLine = (data, projection) => {
    //     return function(d) {
    //       const points = d.linesData.map(function(s) { 
    //         return projection([properties[s].latitude, properties[s].longitude]);
    //       })
    //       return line(points)
    //     }
    // }

    // var gen_branch = function(d) {
    //     return d.linesData.map(function(p) { return {"key": d.key, "paths": p}; });
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
    //         .attr("class", branch_class)
    //         .attr("d", drawLine(data, projection))
    //         .on("mouseover", select_line)
    //         .on("mouseout", deselect_line)
    //         ;


    return (
        <div id="mapContainer">

        </div>
    );
};

export default Map;