import React, { useState, useContext } from 'react'
import { DiceContext } from '../contexts/Dice'
import '../styles/components-style/dice.css'

const Dice = () => {
    const { setDice } = useContext(DiceContext)
    const [show, setShow] = useState("")
    const [rolling, setRolling] = useState(false)

    const rollDice = () => {
        setRolling(true)
        const dice = Math.floor((Math.random() * 6) + 1)

        setTimeout(() => {
            setRolling(false)
            setShow(`show-${dice}`)
            setDice(dice)
        }, 1000)
    }
    
    return (
        <>
            <div className="container">
                <div id='dice' className={`dice dice-two ${!rolling && show}`} onClick={() => rollDice()}>

                        <div id="dice-two-side-one" className='side one'>
                            <div className="dot one-1"></div>
                        </div>
        
                        <div id="dice-two-side-two" className='side two'>
                            <div className="dot two-1"></div>
                            <div className="dot two-2"></div>
                        </div>

      
                        <div id="dice-two-side-three" className='side three'>
                            <div className="dot three-1"></div>
                            <div className="dot three-2"></div>
                            <div className="dot three-3"></div>
                        </div>


                        <div id="dice-two-side-four" className='side four'>
                            <div className="dot four-1"></div>
                            <div className="dot four-2"></div>
                            <div className="dot four-3"></div>
                            <div className="dot four-4"></div>
                        </div>

                        <div id="dice-two-side-five" className='side five'>
                            <div className="dot five-1"></div>
                            <div className="dot five-2"></div>
                            <div className="dot five-3"></div>
                            <div className="dot five-4"></div>
                            <div className="dot five-5"></div>
                        </div>

                        <div id="dice-two-side-six" className='side six'>
                            <div className="dot six-1"></div>
                            <div className="dot six-2"></div>
                            <div className="dot six-3"></div>
                            <div className="dot six-4"></div>
                            <div className="dot six-5"></div>
                            <div className="dot six-6"></div>
                        </div>
                </div> 
            </div>
        </>
    )
}

export default Dice;