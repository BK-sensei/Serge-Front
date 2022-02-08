import React, { useEffect, useState } from 'react';

import '../styles/components-style/ranking.css'

const Ranking = () => {
    const [ bestProperties, setBestProperties ] = useState([])
    const [ bestPlayers, setBestPalyers ] = useState([])
    const [ showRanking, setShowRanking ] = useState(false)
    
    useEffect (() => {
        getRanks()
    }, [])

    const getRanks = async () => {
        const properties = await fetch('http://localhost:5000/properties/top10', {
            credentials: 'include'
        })
        const dataProperties = await properties.json()
        console.log("properties",dataProperties);
        if (!dataProperties) {
            console.log("error")
        } else {
            setBestProperties(dataProperties)
        }

        const players = await fetch('http://localhost:5000/users/top10', {
            credentials: 'include'
        })
        const dataPlayers = await players.json()
        console.log("player", dataPlayers);
        if (!dataPlayers) {
            console.log("error")
        } else {
            setBestPalyers(dataPlayers)
        }
    }

    const handleShowProperties = () => {
        setShowRanking(false)
    }

    const handleShowPlayers = () => {
        setShowRanking(true)
    }


    return (
        <div className='ranking-container'>
            <h1 className='ranking-title'>Classement</h1>

            <div className='rank-titles'>
                <h4 onClick={handleShowProperties} className='ranking-selected'>Stations</h4>
                <h4 onClick={handleShowPlayers} className='ranking-selected'>Joueurs</h4>
            </div>
            
            {!showRanking ?
                bestProperties.length > 0 &&
                <ol className='ranking-list'>
                {bestProperties.map(element => (
                    <li key={element._id} className='ranking-element'>
                        {element.name}
                    </li>
                ))}
                </ol>
            :
                bestPlayers.length > 0 &&
                <ol className='ranking-list'>
                {bestPlayers.map(element => (
                    <li key={element._id} className='ranking-element'>
                        {element.username}
                    </li>
                ))}
                </ol>
            }
        </div>
    )
}

export default Ranking;