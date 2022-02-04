import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../contexts/User.js'
import { logIn, signUp } from '../api/auth'

import TitleWebSite from '../components/TitleWebSite.js'
import ('../styles/pages-style/home.css')

const Signup = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            avatar: ''
        },
        onSubmit: async (values, { setFielError }) => {
            const { username, password } = values

            const response = await signUp({
                username,
                password
            })

            if (response.error) {
                setFielError('submit', response.error)
            } else {
                const user = await logIn({ username, password })
                setUser(user)
                navigate('/gameboard')
            }
        },
        validationSchema: Yup.object({
            pseudo: Yup.string()
            .required("Pseudo obligatoire"),
            email: Yup.string()
            .required("Email obligatoire")
            .email("Email non conforme"),
            password: Yup.string()
            .required("Mot de passe obligatoire"),
            passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Le mot de passe doit être le même'),
        }),
        validateOnChange: false,
    })

    return (
        <div className='home-container'>
            <TitleWebSite />

            <div className='bg-golden'>
                <div className='bg-bronze'>
                    <h2>Inscription</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Pseudo</label>
                        <input
                            type="text"
                            name='username'
                            onChange={handleChange}
                            value ={values.username}
                            error={errors.username}
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
                            onChange={handleChange}
                            value ={values.password}
                            error={errors.password}
                        />
                        <label>Confirmer votre mot de passe</label>
                        <input
                            type="password"
                            name='passwordConfirmation'
                            onChange={handleChange}
                            value ={values.passwordConfirmation}
                            error={errors.passwordConfirmation}
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