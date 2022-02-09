import React from 'react'
import AuctionListElement from './AuctionListElement';

const List = () => {
    return (
        <div className='auctionList-container'>
            <h2 className='listAuction'>STATIONS EN VENTE</h2>

            {/* Faire un map des propriétés mises en vente */}
            <div className=''>
                <AuctionListElement />
                <AuctionListElement />
            </div>
        </div>
    );
};

export default List;