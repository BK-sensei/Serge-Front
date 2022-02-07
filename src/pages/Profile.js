import React from 'react'
import SideBar from '../components/SideBar';

import ('../styles/pages-style/home.css')

const Profile = () => {
    return (
        <div className='page-container'>
            <div className = 'profile-container'>
                <div className='header'>
                    <div className='title'>
                        <div className = 'profile-picture'>
                        </div>
                        <h2 className='user-title'>
                            user 
                        </h2>
                    </div>
                    <div className='counter'>
                        <div>
                            <p>
                                2
                            </p>
                        </div>
                        <div>
                            <p>
                                1
                            </p>
                        </div>
                    </div>
                </div>
                <div className='cards-container'>                    
                    <div className='cards-map'>
                    </div>
                </div>
                <div className='footer'>
                    <img src = '../../../public/images/bunny-pink.png'></img>
                    <p>Serge Subway</p>
                </div>
            </div>
            <SideBar/>
        </div>
    )
}

export default Profile;