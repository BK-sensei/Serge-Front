import { useContext } from 'react'
import { UserContext } from '../contexts/User'

import "../../styles/components-style/buttons.css"
import { putUser } from '../../api/properties'


const BuyButton = () => {
    const { setUser } = useContext(UserContext)

    const handleBuyProperty = async () => {
        const propertiesData = await putUser()
        setUser(propertiesData)
    }

    return (
        <button 
            type='button'
            onClick={() => handleBuyProperty()}
            className="button-card"
            style={{ backgroundColor:"#FEDE44" }}
        >
            <img className="logo-button" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText"> Acheter</p>
        </button>
    )
}

export default BuyButton