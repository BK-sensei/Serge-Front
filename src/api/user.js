import {useContext, setContext} from 'react'

    
    
    const getUser = async (username) => {
        const getUserResponse = await fetch(`${process.env.REACT_APP_API_URL}/user/${username}`, {
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'include',
        })
        const data = getUserResponse.json()
        return data
    }
    
const getUsers = async () => {
    const getUsersResponse = await fetch (`process.env.REACT_APP_API_URL/user` ,{
        headers : {
            'Content-type': 'application/json'
        },
        credentials:'include',
        })
        const data = getUsersResponse.json()
        return data
    }
