import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ModalContextProvider } from './contexts/Modal'
import { UserProvider } from './contexts/User'
import { CardPropertyProvider } from './contexts/CardProperty'

import Home from './pages/Home'
import Signup from './pages/Signup'
import GameBoard from './pages/GameBoard'
import Profile from './pages/Profile'
import AuctionRoom from './pages/AuctionRoom'
import NotFound from './pages/NotFound'
import { DiceProvider } from './contexts/Dice'


const App = () => {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <UserProvider>
          <CardPropertyProvider>
            <DiceProvider>
              <Routes>
                  <Route exact path="/" element={ <Home /> } />
                  <Route path="/signup" element={ <Signup /> } />
                  <Route path="/gameboard" element={ <GameBoard /> } />
                  <Route path="/profile" element={ <Profile /> } />
                  <Route path="/auction-room" element={ <AuctionRoom /> } />
                  <Route path="*" element={ <NotFound /> } />
              </Routes>
            </DiceProvider>
          </CardPropertyProvider>
        </UserProvider>
      </ModalContextProvider>
    </BrowserRouter>
  )
}

export default App;
