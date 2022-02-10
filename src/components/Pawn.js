import * as d3 from "d3";
import { useState, useEffect } from 'react'
import { getProperties } from '../api/properties'

const Pawn = () => {
    const [stationsData, setStationsData] = useState([])
    const [mapCreated, setMapCreated] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {     
        if (stationsData.length > 0 && !mapCreated) {
            // console.log(stationsData)
            pawnPosition()
            setMapCreated(true)
        }
    }, [stationsData])

    const fetchData = async () => {
        const propertiesData = await getProperties()
        // console.log(propertiesData)
        setStationsData(propertiesData)
    }

    const pawnPosition = () => {
        // Récupérer centre carte
        let median_x = d3.median(stationsData, d => d.latitude);
        let median_y = d3.median(stationsData, d => d.longitude);

        // Projection carte
        const projection = d3.geoMercator()
            .translate([0, 0])
            .scale(50000)
            .center([median_x, median_y])

        const path = d3.geoPath(projection)

        // Container carte
        const svg = d3.select("#pawnContainer")
            .append("svg")
                .attr("viewBox", "-110 -130 260 260")
                .attr("class", "mapPawn")
    
        const g = svg.append("g")

        // position joueur 

        const userX = 2.38244550268222
        const userY = 48.8949061258374

        const userPosition = svg.append("g")
            .attr("transform", `translate(${projection([userX, userY])})`)

        userPosition.append("circle")
            .attr("r", 2)
            .attr("fill", "red")
            .raise() 
      
        // const pawn = userPosition.append("image")
        //     .attr("xlink:href", "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2021-10/determiner-age-lapin-173456.jpg")
        //     .attr("height", 50)
        //     .attr("width", 50)
        //     .attr("x", -5 )
        //     .attr("y", -5 )
    }


    return (
        <div id="pawnContainer">         
        </div>
    );
};

export default Pawn;