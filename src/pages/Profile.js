import {useContext} from 'react'
import { UserContext } from '../contexts/User';

import SideBar from '../components/SideBar';
import SergeSubway from '../components/titles/SergeSubway';
import CardProperty from '../components/CardProperty';

import ('../styles/pages-style/profile.css')


const Profile = () => {
    const  { user, setUser } = useContext(UserContext)
    console.log("user",user)
    return (
        <div className='profile-container'>
            <div className='header'>
                <div className = 'profile-picture'>
                </div>
                <h2 className='user-title'>
                    {user.username} 
                </h2>
            </div>
            <div className='cards-container'>
                <h4 className='station-title'><span style={{fontSize: 42}}>§</span>tation<span style={{fontSize: 42}}>§</span></h4>                    
                <div className='list-propertyCard'>
                    {user.properties.map(property =>
                        <div className="li-card"> 
                            <CardProperty
                                property={property}
                            />
                        </div>
                    )}
                </div>
            </div>
            <div className="title">
                <SergeSubway />
            </div>
            <SideBar/>
        </div>
    )
}

export default Profile;