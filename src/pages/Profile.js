import {useContext} from 'react'
import { UserContext } from '../contexts/User';

import SideBar from '../components/SideBar';
import SergeSubway from '../components/titles/SergeSubway';
import { createRoutesFromChildren } from 'react-router-dom';

import ('../styles/pages-style/profile.css')


const Profile = () => {
    const  { user, setUser } = useContext(UserContext)
    console.log("user",user)
    const handleAuction =  ()  => {
        const test = {
            user : user._id,
            property : user.properties[0]

        }
        const response =  fetch('http://localhost:5000/auction', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(test)
        })
    }
    const handleBid = () => {
        const bidtest = {
            user : user._id,
            auction: "6201b6b137781e82262a7934"
        }
        const bidResponse = fetch('http://localhost:5000/bid',{
            method : 'post',
            headers : {
                'Content-Type': 'application/json',
            },
            credentials:'include',
            body:JSON.stringify(bidtest)
        })
    }
    return (
        <div className='page-container'>
            <div className = 'profile-container'>
                <div className='header'>
                    <div className='title'>
                        <div className = 'profile-picture'>
                        </div>
                        <h2 className='user-title'>
                            {user.username} 
                        </h2>
                    </div>
                    <div className='counter'>
                        <div onClick={handleBid} className='card-counter'>
                            <p>
                                {/* {user.property.length} */}
                            </p>
                        </div>
                        <div onClick = {handleAuction}className='card-counter'>
                            <p>
                                {/* {user.cards.length} */}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cards-container'>
                    <h4 className='station-title'>stations</h4>                    
                    <div className='cards-map'>
                    </div>
                </div>
                <div className='footer'>
                <SergeSubway/>
                </div>
            </div>
            <SideBar/>
        </div>
    )
}

export default Profile;