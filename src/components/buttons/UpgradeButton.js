import "../../styles/components-style/buttons.css"

const UpgradeButton = () => {
    return (
        <button style={{ backgroundColor:"#F9BA2D" }}>
            <img className="logo-button" src={require('../../images/logos/upgrade.png')} alt="upgrade"/>
            <p className="buttonText">Améliorer</p>
        </button>
    )
}

export default UpgradeButton