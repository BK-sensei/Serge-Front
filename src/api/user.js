const getUser = async _id => {
    const getUserResponse = await fetch(`${process.env.REACT_APP_API_URL}/user/${_id}`, {
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
    })
    const data = await getUserResponse.json()
    return data
}
    
const getUsers = async () => {
    const getUsersResponse = await fetch (`process.env.REACT_APP_API_URL/user` ,{
        headers : {
            'Content-type': 'application/json'
        },
        credentials:'include',
        })
        const data = await getUsersResponse.json()
        return data
    }

const putUser = async (_id, body) => {
    const getUserResponse = await fetch(`http://localhost:5000/users/${_id}`, {
        method: "put",
        headers: {
            'Content-type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(body)
    })

    const data = await getUserResponse.json()
    return data
}

export {
    getUser,
    getUsers,
    putUser
}