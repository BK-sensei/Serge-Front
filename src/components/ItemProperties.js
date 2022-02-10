import '../styles/components-style/itemProperties.css'

const ItemProperties = (props) => {

    return (
        <div className="flex list-Item">

            <div className="flex start-Item">
                <div className='nft-Item'>
                    <img className="logo-nft-Item" src={require('../images/logos/logo-nft-serge.png')} alt='logo-nft-serge'/>
                    {/* Valeur du NFT de la propriété */}
                    <h4>{props.property.currentValue} §</h4>
                </div>
                <div className='column-Item'>
                    {/* Nom de la station */}
                    <h4>{props.property.name}</h4> 
                    {/* Amélioration */}
                    <img className='logoAmelioration' src={require('../images/ameliorations/vending-machine.png')}  alt=''/> 
                </div>
            </div>

            <div className='flex station'> 
                {/* Ligne de métro */}
                {props.property.lines.map(line => 
                    <div className={`line-Item line_${line }`}>
                        <h4>{line}</h4>
                    </div>
                )} 
            </div>   
 
        </div>
    )
}

export default ItemProperties;