import {useContext, useState,useEffect} from 'react'
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
    const [userInfo, setUserInfo] = useState(null)
    const [ testPositionIndex, setTestPositionIndex] = useState(null)
    const [ testLine, setTestLine] = useState(null)
    const [testProperties,setTestProperties] = useState(null)
    console.log("user",user)

    useEffect(() => {
        if (user == null){
            return 
        } else {
            fetch(`http://localhost:5000/users/620129630a855f22af28c430`)
            .then(response => response.json())
            .then(data => setUserInfo(data))

            fetch (`http://localhost:5000/lines`)
            .then(response => response.json())
            .then(data=>setTestLine(data))

            fetch (`http://localhost:5000/properties`)
            .then(response => response.json())
            .then(data => setTestProperties(data))
        }

      },[])

    const handleAlgoMove = () => {
        const positionName = userInfo.position.position[0][0]
        const diceResult = 6 
        const newIndex = positionName + diceResult - 1
        const numIndex = positionName -1
        const checkIndex = testLine[numIndex]
        const lineIndex = checkIndex.paths[0][newIndex]
        const checkStation = testProperties.find(station => station.keyName === lineIndex)
        const newCoordinates = [checkStation.latitude, checkStation.longitude]
        console.log("finalAlgo",newCoordinates)
         

    }

    const handleCheckDiv = () => {

    }
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
            <div onClick ={handleAlgoMove} className="title">
                <SergeSubway />
            </div>
            <div className="sidebar">
                <SideBar />
            </div>
{/* 
            <div  >
            </div> */}
            
            
            <Link to ='/Profile'>
                <p>user</p>
            </Link>
        </div>
    )
}

export default GameBoard