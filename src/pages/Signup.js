import React from 'react'
import TitleWebSite from '../components/TitleWebSite.js'
import ('../styles/pages-style/home.css')

const Signup = () => {
    return (
        <div className='home-container'>
            <TitleWebSite />

            <div className='bg-golden'>
                <div className='bg-bronze'>
                    <h2>Inscription</h2>
                    <form>
                        <label>Pseudo</label>
                        <input
                            type="text"
                            name='pseudo'
                        />
                        <label>Email</label>
                        <input
                            type="email"
                            name='email'
                        />
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            name='password'
                        />
                        <label>Confirmer votre mot de passe</label>
                        <input
                            type="password"
                            name='password'
                        />
                        <label>Choisir un avatar</label>
                        <div className='chooseAnAvatar'>
                            <img src={require('../images/bunny-blue.png')} className='bunny' alt='' />
                            <img src={require('../images/bunny-yellow.png')} className='bunny' alt='' />
                            <img src={require('../images/bunny-pink.png')} className='bunny' alt='' />
                            <img src={require('../images/bunny-green.png')} className='bunny' alt='' />
                            <img src={require('../images/bunny-purple.png')} className='bunny' alt='' />
                        </div>
                    </form>
                    <button 
                        type='submit'
                        className='ok-btn'
                    >S'inscrire</button>
                </div>
            </div>

            <div className='bg-blue signup-div'>
                <h3>Déjà un compte ?</h3>
                <button 
                    type='button'
                    className='signup-btn'
                >Connexion</button>
            </div>
        </div>
    );
};

export default Signup;