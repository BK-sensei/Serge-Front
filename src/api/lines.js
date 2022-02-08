const getLines = async () => {
    const response = await fetch(`http://localhost:5000/lines`, {
        credentials: 'include',
    })
    const data = await response.json()
    return data
}

export {
    getLines
}
  