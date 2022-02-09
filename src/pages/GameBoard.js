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
    const  { user, setUser } = useContext(UserContext)
    console.log("user",user)

    if (!user) {
        return <p>Pas de user</p>
    }
    
    // console.log(user)
    
    

    return (
        <div>
            <div className="card">
                <CardProperty/>
            </div>
            <div className="map">
                <Map className="map"/>
            </div>
            <div className="title">
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