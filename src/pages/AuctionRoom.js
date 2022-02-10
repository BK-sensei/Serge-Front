import React from 'react'

import AuctionTitle from '../components/titles/AuctionTitle'
import List from '../components/lists/AuctionList'
import Auction from '../components/Auction'
// import SergeSubway from '../components/titles/SergeSubway'
import SideBar from '../components/SideBar'

import ('../styles/pages-style/auction.css')

const AuctionRoom = () => {
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