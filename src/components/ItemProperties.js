import '../styles/components-style/itemProperties.css'

const ItemProperties = () => {
    return (
        <ul className='flex list-ItemProperties'>
            <div className='nft-ItemProperties'>
                    <img className="logo-nft-ItemProperties" src={require('../images/logos/logo-nft-serge.png')} alt='logo-nft-serge'/>
                    {/* Valeur du NFT de la propriété */}
                    <p>1 500 §</p>
                </div>
                <div className='property timeLeft'>
                    <div className='flex station'>
                        {/* Nom de la station */}
                        <h5>La Fourche</h5>
                        {/* Ligne de métro */}
                        <div className='line'>
                            <h4>13</h4>
                        </div>
                    </div>
                    {/* Faire un map des amélioration */}
                    <img className='logoAmelioration' src={require('../images/ameliorations/vending-machine.png')}  alt=''/>
                </div>
        </ul>
    )
}

export default ItemProperties;