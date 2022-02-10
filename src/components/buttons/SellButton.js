import "../../styles/components-style/buttons.css"

const SellButton = () => {
    return (
        <button className="button-card" style={{ backgroundColor:"#FEDE44" }}>
            <img className="logo-button" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText">Vendre</p>
        </button>
    )
}

export default SellButton