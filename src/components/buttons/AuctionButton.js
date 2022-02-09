import React from 'react';

const AuctionButton = () => {
    return (
        <div>
            <button
                type='button'
                className='logo-btn'
                style={{backgroundColor:"#88B995"}}
            >
                <img src={require('../../images/logos/auction-logo.png')} className='auction-logo' alt='' />
            </button>
        </div>
    );
};

export default AuctionButton;