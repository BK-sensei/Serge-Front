import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../contexts/User'

import "../../styles/components-style/buttons.css"
import { putProperty } from '../../api/user'
import { getMe } from '../../api/auth'


const BuyButton = (props) => {
    const { user, getUser } = useContext(UserContext)
    // const [disabled, setDisabled] = useState(false)

    const handleBuyProperty = async (_id, _property) => {
        const newProperty = await putProperty(_id, _property)
        await getUser()
    }
    console.log("props", props)

    return (
        <button 
            type='button'
            onClick={() => handleBuyProperty(user._id, props.property._id)}
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