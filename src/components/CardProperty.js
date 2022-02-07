import "../styles/components-style/cardProperty.css"

const CardProperty = () => {
    return (
        <div className="cardContainer">
            <div className="cardBorder">
                <div className="cardContent">

                    <div className="titleContent">
                        <p className="titleType">Titre de propriété</p>
                        <p className="titleProperty">Titre de propriété</p>
                    </div>

                    <div className="listContent">
                        <ul>
                            <li>
                                <p>Valeur NFT</p>
                                <p>8000 $</p>
                            </li>
                            <li>
                                <p>Taxe de passage</p>
                                <p>600 $</p>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <p>Distributeur</p>
                                <p>800 $</p>
                            </li>
                            <li>
                                <p>Boutique</p>
                                <p>4000 $</p>
                            </li>
                            <li>
                                <p>Centre commercial</p>
                                <p>8000 $</p>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="buttons">
                        <button type="button">Améliorer</button>
                        <button type="button">Vendre</button>
                    </div>

                </div>
            </div>       
    </div>
    );
};

export default CardProperty;