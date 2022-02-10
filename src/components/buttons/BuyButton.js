import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/User'

import "../../styles/components-style/buttons.css"
import { postProperty } from '../../api/properties'


const BuyButton = (props) => {
    const { user, setUser } = useContext(UserContext)
    const [disabled, setDisabled] = useState(false)

    useEffect(() => {
        buyingDisable()
    })

    const handleBuyProperty = async () => {
        const newProperty = await postProperty(props.property)
        console.log(props.property)
    }

    const buyingDisable = () => {
        if (user.balance < props.property.currentValue) {
            setDisabled(true)
        }
    }
   
    return (
        <button 
            type='button'
            onClick={() => handleBuyProperty(props.property)}
            className="button-card"
            style={{ backgroundColor:"#FEDE44" }}
            disabled 
        >
            <img className="logo-button" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText"> Acheter</p>
        </button>
    )
}

export default BuyButton