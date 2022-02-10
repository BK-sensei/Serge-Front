import React, {useState, useEffect} from 'react'

import AuctionTitle from '../components/titles/AuctionTitle'
import List from '../components/lists/AuctionList'
import Auction from '../components/Auction'
// import SergeSubway from '../components/titles/SergeSubway'
import SideBar from '../components/SideBar'

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";

import ('../styles/pages-style/auction.css')

const AuctionRoom = () => {
    const [response, setResponse] = useState("");

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("FromAPI", data => {
          setResponse(data);
        });
      }, []);

    return (
        <div className='auctionRoom-container'>
            <div>
                <AuctionTitle />
                <div className='flex elements'>
                    <List />
                    <Auction />
                </div>
                {/* <SergeSubway /> */}
            </div>
            <SideBar />
        </div>
    )
}

export default AuctionRoom