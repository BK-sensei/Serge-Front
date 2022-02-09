import React from 'react';

const ButtonMap = () => {
    return (
        <div>
            <button
                type='button'
                className='logo-btn'
                style={{backgroundColor:"#DFD3C3"}}
            >
                <img 
                    src={require('../../images/logos/map-logo.png')} 
                    alt=''
                    style={{position:"absolute", width: "70px",height: "60px"}}  
                />
            </button>
        </div>
    );
};

export default ButtonMap;