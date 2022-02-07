import "../styles/components-style/cardProperty.css"

const CardProperty = () => {
    return (
        <div className="cardContainer">
            <div className="cardBorder">
                <div className="cardContent">
                    <div className="titleContent">
                        <div className="titleType">
                            <p>Titre de propriété</p>
                        </div>
                        <div className="titleProperty">
                            <p>Titre de propriété</p>
                        </div>
                    </div>
                    
                    <div>
                        <p>Valeur NFT</p>
                        <p>8000 $</p>
                    </div>
                    <div>
                        <p>Taxe de passage</p>
                        <p>600 $</p>
                    </div>
                    <div>
                        <p>Distributeur</p>
                        <p>800 $</p>
                    </div>
                    <div>
                        <p>Boutique</p>
                        <p>4000 $</p>
                    </div>
                    <div>
                        <p>Centre commercial</p>
                        <p>8000 $</p>
                    </div>
                    <div>
                        <button type="button">Améliorer</button>
                        <button type="button">Vendre</button>
                    </div>
                </div>
            </div>       
    </div>
    );
};

export default CardProperty;