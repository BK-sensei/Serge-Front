import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import GameBoard from './pages/GameBoard'
import Profile from './pages/Profile'
import AuctionRoom from './pages/AuctionRoom'
import NotFound from './pages/NotFound'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/gameboard" element={ <GameBoard /> } />
          <Route path="/profile" element={ <Profile /> } />
          <Route path="/auction-room" element={ <AuctionRoom /> } />
          <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
