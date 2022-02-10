const getProperties = async () => {
    const response = await fetch(`http://localhost:5000/properties`, {
        credentials: 'include',          
    })
    const data = await response.json()
    return data
}

const getProperty = async (_id) => {
    const response = await fetch(`http://localhost:5000/properties/:${_id}`, {
        credentials: 'include',          
    })
    const data = await response.json()
    return data
}

// acheter propriété 
const postProperty = async () => {
    const postPropertyResponse = await fetch (`process.env.REACT_APP_API_URL/user/property` ,{
        method: 'post',
        headers : {
            'Content-type': 'application/json'
        },
        credentials:'include',
        })
        const data = await postPropertyResponse.json()
        return data
    }


export {
    getProperties,
    getProperty,
    postProperty
}
  
