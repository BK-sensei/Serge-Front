const getProperties = async () => {
    const response = await fetch("http://localhost:5000/properties", {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await response.json()
    return data
}

export {
    getProperties
}