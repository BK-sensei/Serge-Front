import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom' 

import { UserContext } from '../../contexts/User'
import { logIn } from '../../api/auth'

import ('../../styles/pages-style/home.css')

const Login = () => {
    const navigate = useNavigate()
    const { setUser } = useContext(UserContext)

    const { values, errors, handleSubmit, handleChange } = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: async (values, { setFieldError }) => {
            try {
                const response = await logIn(values)
                setUser(response)
                navigate('/gameboard')
            } catch (err) {
                console.log(err);
                setFieldError('submit', 'Incorrect username/password')
            }
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required('Email obligatoire'),
            password: Yup.string()
            .required('Mot de passe obligatoire')
            .min(8, 'Votre mot de passe est trop court')
        }),
        validateOnChange: false
    })

    console.log(errors)

    return (
        <>
            <div className='bg-golden'>
                <div className='bg-bronze'>
                    <h2>Connexion</h2>
                    <form onSubmit={handleSubmit}>
                        <label>Email</label>
                        <input
                            type="text"
                            name="username"
                            // placeholder='serge@subway.com'
                            onChange={handleChange}
                            value={values.username}
                            error={errors.username}
                        />
                        <label>Mot de passe</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            value={values.password}
                            error={errors.password}
                        />
                        <button 
                            type='submit'
                            className='ok-btn'
                        >OK</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login