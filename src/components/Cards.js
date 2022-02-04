import React from 'react';
import "../styles/components-style/Cards.css"

fetch("./api/properties")
    .then(res => res.json)


const Cards = () => {
    return (
        <div className="out">
            <div className="title">
                <h2>Titre de propriété</h2>
                <h1></h1>
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
    );
};

export default Cards;