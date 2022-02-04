import React from 'react'
import ('../styles/components-style/titleWebSite.css')

const TitleWebSite = () => {
    return (
        <>
            <div className='bg-blue'>
                <div className='subway-title'>
                    <img clasName='logo' src={require('../../src/images/logo-nft-serge.png')} alt=''/>
                    <h1><span className='serge'>§</span>ERGE <span className='serge'>§</span>UBWAY</h1>
                </div>
            </div>
        </>
    );
};

export default TitleWebSite;