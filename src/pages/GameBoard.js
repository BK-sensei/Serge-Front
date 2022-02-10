import { useContext } from 'react'
import { UserContext } from '../contexts/User'; 
import { CardPropertyContext } from "../contexts/CardProperty";
// import {Link} from 'react-router-dom'


// import Profile from './Profile'
// import { getUser } from '../api/user'
import CardProperty from '../components/CardProperty'
import SideBar from '../components/SideBar'
import Map from "../components/Map"
// import Pawn from "../components/Pawn"
import SergeSubway from '../components/titles/SergeSubway'

import "../styles/pages-style/gameboard.css"


const GameBoard = () => {
    const  { user } = useContext(UserContext)
    // console.log("user",user)
    const { cardProperty } = useContext(CardPropertyContext)
    console.log("card", cardProperty)
    
    
    // useEffect(() => {
    //     fetchUser()
    // }, [])

    // const fetchUser = async () => {
    //     const userData = await getUser()
    //     console.log("userData",userData)
    //     // setUser(userData)
    // }

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
            {/* <div className="pawn">
                <Pawn/>
            </div>  */}
            <div className="map">
                <Map className="map"/>
            </div>
            <div className="title">
                <SergeSubway />
            </div>
            <div className="sidebar">
                <SideBar />
            </div>
        </div>
    )
}

export default GameBoard