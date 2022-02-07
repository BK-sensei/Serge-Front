const getProperties = async () => {
    const response = await fetch(`http://localhost:5000/properties`, {
        credentials: 'include',          
    })
    const data = await response.json()
    return data
}

export {
    getProperties
}
  