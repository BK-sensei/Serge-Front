import CardProperty from '../components/CardProperty'
import "../styles/pages-style/gameboard.css"

import Map from "../components/Map"

const GameBoard = () => {
    return (
        <div className="background">
            <div className="card">
                <CardProperty/>
            </div>
            <div className="map">
                <Map/>
            </div>
        </div>
    )
}

export default GameBoard