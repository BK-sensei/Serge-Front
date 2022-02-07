import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

import { UserContext } from '../../contexts/User.js'
import { logIn, signUp } from '../../api/auth'

import ('../../styles/pages-style/home.css')

const SignUp = () => {
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
            console.log("test")
            const { username, password } = values
            console.log("coucou")
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
            username: Yup.string()
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
    console.log("errors", errors)

    return (
        <>
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
                            <img src={require('../../images/avatars/bunny-blue.png')} className='bunny' alt='' />
                            <img src={require('../../images/avatars/bunny-yellow.png')} className='bunny' alt='' />
                            <img src={require('../../images/avatars/bunny-pink.png')} className='bunny' alt='' />
                            <img src={require('../../images/avatars/bunny-green.png')} className='bunny' alt='' />
                            <img src={require('../../images/avatars/bunny-purple.png')} className='bunny' alt='' />
                        </div>
                        
                        <button 
                            type='submit'
                            className='ok-btn'
                        >S'inscrire</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SignUp;