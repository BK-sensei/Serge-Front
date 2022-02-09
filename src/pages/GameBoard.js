import {useContext} from 'react'
import { UserContext } from '../contexts/User'; 
import {Link} from 'react-router-dom'

import Profile from './Profile'

import CardProperty from '../components/CardProperty'
import SideBar from '../components/SideBar'
import Map from "../components/Map"
import SergeSubway from '../components/titles/SergeSubway'

import "../styles/pages-style/gameboard.css"


const GameBoard = () => {
    const  { user, setUser, userPositon, setUserPosition } = useContext(UserContext) 
    console.log(user)
    
    const HandleTest = () => {
    setUserPosition([48.8906811628606,2.37681528947191])
    console.log("userposition",userPositon)
    }

    return (
        <div>
            <div className="card">
                <CardProperty/>
            </div>
            <div className="map">
                <Map className="map"/>
            </div>
            <div  onClick={HandleTest} className="title">
                <SergeSubway />
            </div>
            <div className="sidebar">
                <SideBar />
            </div>

            <div  >
                <p>megatest</p>
            </div>
            
            
            <Link to ='/Profile'>
                <p>user</p>
            </Link>
        </div>
    )
}

export default GameBoard