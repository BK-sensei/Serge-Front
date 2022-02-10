import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/User'

import "../../styles/components-style/buttons.css"
import { putProperty } from '../../api/user'


const BuyButton = (props) => {
    const { user, setUser } = useContext(UserContext)
    // const [disabled, setDisabled] = useState(false)

    const handleBuyProperty = async () => {
        const newProperty = await putProperty(props.property)
        console.log(props.property)
    }

    // const buyingDisable = () => {
    //     if (user.balance < props.property.currentValue) {
    //         setDisabled(true)
    //     }
    // }
   
    return (
        <button 
            type='button'
            onClick={() => handleBuyProperty(props.property)}
            className="button-card"
            style={{ backgroundColor:"#FEDE44" }}
            // disabled={true}
        >
            <img className="logo-button" src={require('../../images/logos/bank.png')} alt="bank"/>
            <p className="buttonText"> Acheter</p>
        </button>
    )
}

export default BuyButton