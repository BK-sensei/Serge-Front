import "../styles/components-style/cardProperty.css"
import BuyButton from '../components/buttons/BuyButton'

const CardProperty = () => {
    return (
        <div className="cardContainer">
            <div className="cardBorder">
                <div className="cardContent">

                    <div className="titleContent">
                        <p className="titleType">Titre de propriété</p>
                        <h4 className="titleProperty">Titre de propriété</h4>
                    </div>

                    <div className="listContent">
                        <ul>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/logos/logo-nft-serge.png')} alt="logo-nft"/>
                                    <p>Valeur</p>
                                </div>
                                <p className="bold">8000 $</p>
                            </li>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/logos/ticket.png')} alt="metro-ticket"/>
                                    <p>Taxe de passage</p>
                                </div>
                                <p className="bold">600 $</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/vending-machine.png')} alt="vending-machine"/>
                                    <p>Distributeur</p>
                                </div>
                                <p className="bold">800 $</p>
                            </li>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/shop.png')} alt="shop"/>
                                    <p>Boutique</p>
                                </div>
                                <p className="bold">4000 $</p>
                            </li>
                            <li>
                                <div className="liStart">
                                    <img className="logo-upgrade" src={require('../images/ameliorations/monument.png')} alt="monument"/>
                                    <p>Monument</p>
                                </div>
                                <p className="bold">8000 $</p>
                            </li>
                        </ul>
                        <div className="infosOwner">
                            <div>
                                <p>Propriétaire :</p>
                                <p className="bold" style={{marginTop: 8}}>Aucun</p>
                            </div>
                            <BuyButton> 
                                <button className="buttonBuy" type="button">Acheter</button>
                            </BuyButton> 
                        </div>
                    </div>
                    
                    
                    {/* { property.owner === user &&
                        <div className="buttons">
                            <button className="buttonUpgrade" type="button">Améliorer</button>
                            <button className="buttonSell" type="button">Vendre</button>
                        </div> 
                    }  */}

                    {/* { (property.owner =! "" && property.owner =! user) &&
                        <div>
                            <img src={property.owner.pictureUrl} alt="profile-pic"/> 
                            <p>{property.owner}</p>
                        </div> 
                    }  */}

                        


                </div>
            </div>       
    </div>
    );
};

export default CardProperty;