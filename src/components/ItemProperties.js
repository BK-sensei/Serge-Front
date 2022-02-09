import '../styles/components-style/itemProperties.css'

const ItemProperties = (props) => {
    console.log(props)
    return (
        <ul className='flex list-ItemProperties'>
            <div className='nft-ItemProperties'>
                    <img className="logo-nft-ItemProperties" src={require('../images/logos/logo-nft-serge.png')} alt='logo-nft-serge'/>
                    {/* Valeur du NFT de la propriété */}
                    <p>{props.property.currentValue}</p>
                </div>
                <div className='property timeLeft'>
                    <div className='flex station'>
                        {/* Nom de la station */}
                        <h5>{props.property.name}</h5>
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