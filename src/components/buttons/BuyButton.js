import { useContext } from 'react'
import { UserContext } from '../../contexts/User'

import "../../styles/components-style/buttons.css"
import { postProperty } from '../../api/properties'


const BuyButton = (props) => {
    const { setUser } = useContext(UserContext)

    const handleBuyProperty = async () => {
        const newProperty = await postProperty(props.property)
        console.log(props.property)
    }

    return (
        <button 
            type='button'
            onClick={() => handleBuyProperty(props.property)}
            className="button-card"
            style={{ backgroundColor:"#FEDE44" }}
        >
            <img className="logo-button" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText"> Acheter</p>
        </button>
    )
}

export default BuyButton