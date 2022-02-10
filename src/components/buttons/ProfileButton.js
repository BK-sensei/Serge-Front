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
    // console.log(user)

    const handleLogoutClick = () => {
        fetch('http://localhost:5000/auth/logout', {
          method: 'delete',
          credentials: 'include'
        })
          .then(response => {
            navigate('/')
          })
    }

    return (
        <div className="containerProfile">
            <div className='contentProfile'>
                <div className="contentStart">
                    {!user.pictureUrl ? 
                        <img className="avatar" src={require('../../images/avatars/bunny-green.png')} alt="pink-Serge-metro"/>
                    : <img className="avatar" src={user.pictureUrl} alt="bank"/>
                    }
                    <h3>{user.username}</h3>
                </div>
                <button 
                    type="button" 
                    className="logout-btn"
                    onClick={handleLogoutClick}
                >
                <AiOutlineLogout color="white" fontSize="1.5em"/>
                </button>
            </div>
        </div>
    );
};

export default ButtonProfile;