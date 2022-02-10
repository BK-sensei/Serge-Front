import {useContext, useState,useEffect} from 'react'
import { UserContext } from '../contexts/User'; 
import { DiceContext } from '../contexts/Dice'; 
import { CardPropertyContext } from "../contexts/CardProperty";
import {Link} from 'react-router-dom'


// import Profile from './Profile'
import { getUser } from '../api/user'
import CardProperty from '../components/CardProperty'
import SideBar from '../components/SideBar'
import Map from "../components/Map"
import Pawn from "../components/Pawn"
import SergeSubway from '../components/titles/SergeSubway'

import "../styles/pages-style/gameboard.css"


const GameBoard = () => {
    const  { user, setUser, editUser } = useContext(UserContext)
    const { dice } = useContext(DiceContext)
    const { cardProperty, setCardProperty } = useContext(CardPropertyContext)   
    const [userInfo, setUserInfo] = useState(null)
    const [ testPositionIndex, setTestPositionIndex] = useState(null)
    const [ testLine, setTestLine] = useState(null)
    const [testProperties,setTestProperties] = useState(null)


    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/users/${user._id}`)
                .then(response => response.json())
                .then(data => setUserInfo(data))

            fetch (`http://localhost:5000/lines`)
            .then(response => response.json())
            .then(data=>setTestLine(data))

            fetch (`http://localhost:5000/properties`)
            .then(response => response.json())
            .then(data => setTestProperties(data))
        }
      }, [user])

    useEffect(() => {
        if (user) {
            handleAlgoMove()
        }
    }, [dice])


    const handleAlgoMove = async () => {
        const currentLine = user.position[0].position[0][0]
        const line = testLine.find(line => line.key === currentLine)
        const currentStationIndex = line.paths[0].findIndex(station => station === user.position[0].keyName)
        const newStationIndex = currentStationIndex + dice
        const newStationName = line.paths[0][newStationIndex]
        const newStation = testProperties.find(station => station.keyName === newStationName)
        setCardProperty(newStation)
        
        const body = {
            position: [newStation._id]
        }

        await editUser(body)
    }

    const handleCheckDiv = () => {

    }

    if (!user) {
        return <p>Pas de user</p>
    }
    
    // console.log(user)
    
    return (
            <div>
                {cardProperty &&
                    <div className="card">
                        <CardProperty
                            property={cardProperty}
                        />
                    </div>
                }
                <div className="map">
                    <Map className="map" />
                </div>
                <div onClick ={handleAlgoMove} className="title">
                    <SergeSubway />
                </div>
                <div className="sidebar">
                    <SideBar />
                </div>
            </div>
    )
}

export default GameBoard