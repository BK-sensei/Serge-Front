import {useContext} from 'react'
import { UserContext } from '../contexts/User'; 
import { CardPropertyContext } from '../contexts/CardProperty'; 

import "../styles/components-style/cardProperty.css"
import "../styles/components-style/linesColors.css"
import BuyButton from '../components/buttons/BuyButton'
import SellButton from '../components/buttons/SellButton'
import UpgradeButton from '../components/buttons/UpgradeButton'


const CardProperty = (props) => {
    const  { user } = useContext(UserContext)
    const  { setCardProperty } = useContext(CardPropertyContext)
    const { property } = props
  
    const handleClosed = () => {
        setCardProperty(null)
    }

     
    return (
        <div 
            className="cardContainer" 
            // style={property.monument && {backgroundImage:`url(../images/monuments/${property.monument.station}.png)`}}
        >
            <button 
                className="button-modale" 
                onClick={handleClosed}
            >
                <h4>X</h4>
            </button>
            <div className="cardBorder">
                <div className="cardContent">

                    {/* {property.class === "hub" &&
                        <div className="stripes">
                            {property.lines.map(line => {
                                <div className={`line_${line}`}></div>
                            })}
                        </div>
                    } */}

                    <div className={property.class}>
                        <div className="titleContent">
                            <p className="titleType">Titre de propriété</p>
                            <h4 className="titleProperty">{property.name}</h4>
                        </div>
                    </div>
                 
                    <div className="listContent">
                        <ul>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/logos/logo-nft-serge.png')} alt="logo-nft"/>
                                    <p>Valeur</p>
                                </div>
                                <p className="bold">{property.currentValue} $</p>
                            </li>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/logos/ticket.png')} alt="metro-ticket"/>
                                    <p>Taxe de passage</p>
                                </div>
                                <p className="bold">{property.tax} $</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/vending-machine.png')} alt="vending-machine"/>
                                    <p>Distributeur</p>
                                </div>
                                <p className="bold">{property.currentValue/10} $</p>
                            </li>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/shop.png')} alt="shop"/>
                                    <p>Boutique</p>
                                </div>
                                <p className="bold">{property.currentValue/2}  $</p>
                            </li>
                            {property.monument ? 
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/monument.png')} alt="monument"/>
                                    <p>Monument</p>
                                </div>
                                <p className="bold">{property.currentValue} $</p>
                            </li>
                            :
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/mall.png')} alt="shopping-mall"/>
                                    <p>Centre commercial</p>
                                </div>
                                <p className="bold">{property.currentValue} $</p>
                            </li>
                            }
                            
                        </ul>
                        {property.owner && property.owner === user._id &&
                            <div className="bottomCard">
                                <UpgradeButton
                                    property={property}
                                />
                                <SellButton
                                    property={property}
                                />
                            </div> 
                        } 
                        {property.owner && property.owner !== user._id &&
                            <div className="infosOwner">
                                <p>Propriétaire:</p>
                                <p className="bold" style={{marginTop: 8}}>{property.owner}</p>
                            </div>
                        }
                        {property.owner && property.owner !== user._id &&
                            <div className="infosOwner">
                                <p>Propriétaire:</p>
                                <p className="bold" style={{marginTop: 8}}>{property.owner}</p>
                            </div>
                        }
                        {!property.owner &&
                        <div className="bottomCard">
                            <div className="infosOwner">
                                <p>Propriétaire :</p>
                                <p className="bold" style={{marginTop: 8}}>Aucun</p>
                            </div>
                            <BuyButton
                                property={property}
                            /> 
                        </div>
                        } 
                    </div>
                </div>
            </div>    
        </div>    
    );
};

export default CardProperty;