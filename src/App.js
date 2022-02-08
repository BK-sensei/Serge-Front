import React, {useState,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { UserProvider } from './contexts/User'
import Home from './pages/Home'
import Signup from './pages/Signup'
import GameBoard from './pages/GameBoard'
import Profile from './pages/Profile'
import AuctionRoom from './pages/AuctionRoom'
import NotFound from './pages/NotFound'
import TestAuction from './pages/TestAuction'

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:4001";


const App = () => {
  // const [response, setResponse] = useState("");

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT);
  //   socket.on("FromAPI", data => {
  //     setResponse(data);
  //   });
  // }, []);
  return (
    <BrowserRouter>
      <UserProvider>
        <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route path="/signup" element={ <Signup /> } />
            <Route path="/gameboard" element={ <GameBoard /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="/auction-room" element={ <AuctionRoom /> } />
            <Route path="/testauction" element = {<TestAuction></TestAuction>}/>
            <Route path="*" element={ <NotFound /> } />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  )
}

export default App;
