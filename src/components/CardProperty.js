import {useContext, useEffect} from 'react'
import { UserContext } from '../contexts/User'; 

import "../styles/components-style/cardProperty.css"
import "../styles/components-style/linesColors.css"
import BuyButton from '../components/buttons/BuyButton'
import SellButton from '../components/buttons/SellButton'
import UpgradeButton from '../components/buttons/UpgradeButton'


const CardProperty = (props) => {
    const  { user } = useContext(UserContext)
    const { property } = props

    console.log("props id",user)

    return (
        <div className="cardContainer">
            <div className="cardBorder">
                <div className="cardContent">
                        <div 
                            // style= {color: "black", {props.property.class === "hub" && {nthStyles}}
                            className={property.class}
                        >
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
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/monument.png')} alt="monument"/>
                                    <p>Monument</p>
                                </div>
                                <p className="bold">{property.currentValue} $</p>
                            </li>
                        </ul>
                            {property.owner && property.owner === user._id &&
                                <div className="bottomCard">
                                    <UpgradeButton/>
                                    <SellButton/>
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
                                <BuyButton> 
                                    <button className="buttonBuy" type="button">Acheter</button>
                                </BuyButton> 
                            </div>
                            }                                
                    </div>
                </div>
            </div>       
        </div>
    );
};

export default CardProperty;