import { useContext } from 'react'
import { useNavigate } from 'react-router-dom' 

import { UserContext } from '../../contexts/User'
import { logOut } from '../../api/auth'
import { AiOutlineLogout } from 'react-icons/ai'

// import styled from 'styled-components'
import "../../styles/components-style/profileButton.css"



const ButtonProfile = () => {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)
    console.log(user)

    return (
        <div className="containerProfile">
            <div className='contentProfile'>
                <div className="contentStart">
                    {!user.pictureUrl ? 
                        <img className="avatar" src={require('../../images/avatars/bunny-pink.png')} alt="pink-Serge-metro"/>
                    : <img className="avatar" src={user.pictureUrl} alt="bank"/>
                    }
                    <h3>{user.username}</h3>
                </div>
                <AiOutlineLogout color="white" fontSize="1.5em"/>
            </div>
        </div>
    );
};

export default ButtonProfile;