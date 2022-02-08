import { useContext } from 'react'
import { UserContext } from '../contexts/User'

import "../styles/components-style/bankAccount.css"

const BankAccount = () => {
    const { user } = useContext(UserContext)

    return (
        <div className='containerAccount'>
            {/* <p className='textBank'>BANK</p> */}
            <div className='contentAccount'>
                <img className='logoBank' src={require('../images/billets.png')} alt="billets"/>
                <p className='textAccount'>{user.balance} §</p>
            </div>
        </div>
    );
};

export default BankAccount;