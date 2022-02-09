import '../styles/pages-style/auction.css'

const ItemProperties = () => {
    return (
        <ul className='flex list'>
            <div className='nft'>
                    <img src={require('../images/logos/logo-nft-serge.png')} className='nft-serge' alt=''/>
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
                    <img src={require('../images/ameliorations/vending-machine.png')} className='amelioration' alt=''/>
                </div>
        </ul>
    )
}

export default ItemProperties;