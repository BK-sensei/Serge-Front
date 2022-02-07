import React from 'react';

const List = () => {
    return (
        <div className='auctionList-container'>
            <h2 className='listAuction'>STATIONS EN VENTE</h2>

            {/* Faire un map des propriétés mises en vente */}
            <ul className='flex list'>
                <div className='nft'>
                    <img src={require('../../images/logos/logo-nft-serge.png')} className='nft-serge' alt=''/>
                    {/* Valeur du NFT de la propriété */}
                    <p>1 500 §</p>
                </div>
                <div className='property timeLeft'>
                    <div className='flex station'>
                        {/* Nom de la station */}
                        <h4>La Fourche</h4>
                        {/* Ligne de métro */}
                        <div className='line'>
                            <h4>13</h4>
                        </div>
                    </div>
                    {/* Faire un map des amélioration */}
                    <img src={require('../../images/ameliorations/vending-machine.png')} className='amelioration' alt=''/>
                </div>
                <div className='flex timeLeft'>
                    <img src={require('../../images/red-clock.png')} className='amelioration' alt=''/>
                    {/* Afficher le temps restant pour faire une offre */}
                    <p>08h 57min</p>
                </div>
            </ul>
        </div>
    );
};

export default List;