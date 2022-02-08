const getProperties = async () => {
    const response = await fetch(`http://localhost:5000/properties`, {
        credentials: 'include',          
    })
    const data = await response.json()
    return data
}

const getProperty = async (id) => {
    const response = await fetch(`http://localhost:5000/properties/:${id}`, {
        credentials: 'include',          
    })
    const data = await response.json()
    return data
}

export {
    getProperties,
    getProperty 
}
  
