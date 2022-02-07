const logIn = async ({ username, password }) => {
    const loginResponse = await fetch(`http://localhost:5000/auth/login`, {   
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            username,
            password
        })
    })

    if (loginResponse.status >= 400) {
        throw loginResponse.statusText
    }

    const data = await loginResponse.json()
    return data
}

const signUp = async ({ username, password, email, balance }) => {
    const signupResponse = await fetch(`http://localhost:5000/auth/signup`, {
        method: 'post',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
            username,
            password,
            email,
            balance
        })
    })

    const data = await signupResponse.json()
    return data
}

const getMe = async () => {
    const getmeResponse = await fetch(`${process.env.REACT_APP_API_URL}/auth/me`, {
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
    })
    const data = getmeResponse.json()
    return data
}

const logOut = async () => {
    const logoutResponse = await fetch(`${process.env.REACT_APP_API_URL}`, {
        method: 'delete',
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
    })

    const data = logoutResponse.json()
    return data
}

export {
    logIn,
    signUp,
    getMe,
    logOut
}