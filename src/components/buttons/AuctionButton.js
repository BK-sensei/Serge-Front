import React from 'react';

const AuctionButton = () => {
    return (
        <div>
            <button
                type='button'
                className='logo-btn'
                style={{backgroundColor:"#88B995", position:"relative"}}
            >
                <img 
                    src={require('../../images/logos/auction-logo.png')}  
                    alt=''
                    style={{position:"absolute", width: "70px",height: "50px"}} 
                />
            </button>
        </div>
    );
};

export default AuctionButton;