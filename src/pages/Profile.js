import {useContext} from 'react'
import { UserContext } from '../contexts/User';

import SideBar from '../components/SideBar';
import SergeSubway from '../components/titles/SergeSubway';

import ('../styles/pages-style/profile.css')


const Profile = () => {
    const  { user, setUser } = useContext(UserContext)
    console.log("user",user)
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
                        <div className='card-counter'>
                            <p>
                                {/* {user.property.length} */}
                            </p>
                        </div>
                        <div className='card-counter'>
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