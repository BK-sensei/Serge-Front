import { Link } from 'react-router-dom'

import TitleWebSite from '../components/titles/TitleWebSite.js'
import Login from '../components/forms/Login.js'

import ('../styles/pages-style/home.css')

const Home = () => {
    return (
        <div className='home-container'>
            <TitleWebSite />

            <Login />

            <div className='bg-blue signup-div'>
                <h3>Pas de compte ?</h3>
                <Link to='/signup'>
                    <button 
                        type='button'
                        className='signup-btn'
                    >Inscription
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home