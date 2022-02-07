import React from 'react'
import TitleWebSite from '../components/TitleWebSite.js'

import ('../styles/pages-style/home.css')



const Home = () => {
    return (
        <div>
        <div className='home-container'>
            <TitleWebSite />

            <div className='bg-golden'>
                <div className='bg-bronze'>
                    <h2>Connexion</h2>
                    <form>
                        <label>Email</label>
                        <input
                            type="email"
                            // placeholder='serge@subway.com'
                        />
                        <label>Mot de passe</label>
                        <input
                            type="password"
                        />
                    </form>
                    <button 
                        type='submit'
                        className='ok-btn'
                    >OK</button>
                </div>
            </div>

            <div className='bg-blue signup-div'>
                <h3>Pas de compte ?</h3>
                <button 
                    type='button'
                    className='signup-btn'
                >Inscription</button>
            </div>
        </div>
    </div>
    )
}

export default Home