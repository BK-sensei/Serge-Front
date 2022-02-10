import React from 'react'

import ('../styles/pages-style/auction.css')

const Auction = () => {
    return (
        <div className='currentAuction-container'>
            <h2 className='currentAuction'>ENCHERE EN COURS</h2>

            <div className='flex time'>
                <img src={require('../images/clock.png')} className='clock' alt=''/>
                {/* à changer par le temps restant */}
                <p className='time-text'>O8h 57min</p>
            </div>

            <div className='cards flex time'>
                <img src={require('../images/background-cards.png')} className='bg-cards' alt=''/>
                {/* à changer par la carte de la propriété en vente */}
                <img src={require('../images/card-property.png')} className='card-property' alt=''/>
            </div>

            <div className='auction-value flex time'>
                <hr />
                <h4 style={{color:"white"}}>VALEUR DE L’ENCHERE</h4>
                <div className='flex time'>
                    <img src={require('../images/logos/logo-nft-serge.png')} className='nft-serge' alt=''/>
                    {/* à changer par la valeur en cours */}
                    <p className='value'>3 500 §</p> 
                    <img src={require('../images/logos/logo-nft-serge.png')} className='nft-serge' alt=''/>
                </div>
                <hr />
            </div>

            <div className='bids-players'>
            {/* faire un map pour afficher la liste des bids */}
            </div>
        </div>
    );
};

export default Auction;