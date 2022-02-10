import React, {useState, useEffect, useContext} from 'react'

import AuctionTitle from '../components/titles/AuctionTitle'
import List from '../components/lists/AuctionList'
import Auction from '../components/Auction'
import SergeSubway from '../components/titles/SergeSubway'
import SideBar from '../components/SideBar'
import { UserContext } from "../contexts/User"

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";

import ('../styles/pages-style/auction.css')

const AuctionRoom = () => {
    const [response, setResponse] = useState("1000");
    const [socket, setSocket] = useState(null);
    const [send, setSend] = useState(false);
    const { user } = useContext(UserContext)
    //// REQUETE POUR RECUPERER L AUCTION ===> sauvegarde dans un state. + Passer en params de sendBid
    //// AFFICHER LA REPONSE QUI CORRESPOND AU VALEUR D'ENCHERE 
    /////
    useEffect(() => {
        const newSocket = socketIOClient(ENDPOINT, { transports : ['websocket'] });
        setSocket(newSocket)
        return () => newSocket.disconnect();
    }, [setSocket]);

    useEffect(() => {
        if(send) {
            socket.on("response", (response) => {
                setResponse(response)
            })
        }
    }, [send])

    console.log("response",response)

    const sendBid = (user, auction) => {
        socket.emit("createBid", JSON.stringify({
            "user" : user, // user
            "auction" : auction//auction
        }))
        setSend(true)
    }

    return (
        <div className='auctionRoom-container'>
            <div>
                <AuctionTitle />
                <div className='flex elements'>
                    <List />
                    <Auction value={response}/>
                </div>
                <SergeSubway />
            </div>
            <SideBar sendBid={() => sendBid(user._id, "620525959c3a4edf5a6c34fa")}/>
        </div>
    )
}

export default AuctionRoom