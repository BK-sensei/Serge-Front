import { Link } from 'react-router-dom'

import TitleWebSite from '../components/titles/TitleWebSite.js'
import SignUp from '../components/forms/SignUp.js'

import ('../styles/pages-style/home.css')

const Signup = () => {

    return (
        <div className='home-container'>
            <TitleWebSite />
            <SignUp />

            <div className='bg-blue signup-div'>
                <h3>Déjà un compte ?</h3>
                <Link to='/' style={{textDecoration:'none'}}>
                    <button 
                        type='button'
                        className='signup-btn'
                    >Connexion</button>
                </Link>
            </div>
        </div>
    );
};

export default Signup