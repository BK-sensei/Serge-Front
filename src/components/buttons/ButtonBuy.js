import "../../styles/components-style/buttons.css"


const ButtonBuy = () => {
    return (
        <button style={{ backgroundColor:"#FEDE44" }}>
            <img class="logo" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText"> Acheter</p>
        </button>
    )
}

export default ButtonBuy