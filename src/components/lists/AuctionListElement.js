import React from 'react'
import '../../styles/pages-style/auction.css'

const AuctionListElement = () => {
    return (
        <ul className='flex list auction-list'>
            <div className='nft'>
                    <img src={require('../../images/logos/logo-nft-serge.png')} className='nft-serge' alt=''/>
                    {/* Valeur du NFT de la propriété */}
                    <p>1 500 §</p>
                </div>
                <div className='property timeLeft'>
                    <div className='flex station'>
                        {/* Nom de la station */}
                        <h4>Châtelet</h4>
                        {/* Ligne de métro */}
                        <div className='line line-1'>
                            <h4>1</h4>
                        </div>
                        <div className='line line-4'>
                            <h4>4</h4>
                        </div>
                        <div className='line line-7'>
                            <h4>7</h4>
                        </div>
                        <div className='line line-11'>
                            <h4>11</h4>
                        </div>
                        <div className='line line-14'>
                            <h4>14</h4>
                        </div>
                    </div>
                    <div className='flex' style={{justifyContent: 'space-between'}}>
                        {/* Faire un map des amélioration */}
                        <div className='flex' style={{gap:'10px'}}>
                            <img src={require('../../images/ameliorations/vending-machine.png')} className='amelioration' alt=''/>
                            <img src={require('../../images/ameliorations/vending-machine.png')} className='amelioration' alt=''/>
                            <img src={require('../../images/ameliorations/vending-machine.png')} className='amelioration' alt=''/>
                        </div>
                        <div className='flex timeLeft'>
                            <img src={require('../../images/red-clock.png')} className='red-clock' alt=''/>
                            {/* Afficher le temps restant pour faire une offre */}
                            <p className='time-text-list'>08h 57min</p>
                        </div>
                    </div>
                </div>
        </ul>
    )
}

export default AuctionListElement;