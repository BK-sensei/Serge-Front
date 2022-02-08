import "../../styles/components-style/buttons.css"


const BuyButton = () => {
    return (
        <button style={{ backgroundColor:"#FEDE44" }}>
            <img className="logo" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText"> Acheter</p>
        </button>
    )
}

export default BuyButton