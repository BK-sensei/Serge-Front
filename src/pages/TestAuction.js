import {useContext, useEffect, useState} from 'react'
import { UserContext } from '../contexts/User';


const TestAuction = () => {
    
    const [auction, setAuction] = useState(null)

    const  { user, setUser } = useContext(UserContext)
    // console.log('user', user)

//////// FETCH AUCTION////////////
    useEffect(() => {
        fetch(`http://localhost:5000/auction/62023a5537781e82262a7941`)
          .then(response => response.json())
          .then(data => setAuction(data))
      },[])

      ///// POST AUCTION ///////////
    const handleAuction = async  ()  => {
            const test = {
                user : user._id,
                property : user.properties[0]
    
            }
            const response =  fetch('http://localhost:5000/auction', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(test)
            })
        }
        ///// BID////////////////////////////////
        const handleBid = () => {
                const bidtest = {
                    user : user._id,
                    auction: "62023a5537781e82262a7941"
                }
                const bidResponse = fetch('http://localhost:5000/bid',{
                    method : 'post',
                    headers : {
                        'Content-Type': 'application/json',
                    },
                    credentials:'include',
                    body:JSON.stringify(bidtest)
                })
            }

///LOG/////////////////
    const handleLog = () => {
        console.log("auction", auction)
    }

if (auction == null){
    return null
} 

    return (
        
        <div>
            <h1 onClick ={handleAuction}>Click for auction</h1>
            <h2 onClick={handleBid}>Click for bid</h2>
            <p> {auction.bids.length}</p>
            <h3 onClick ={handleLog}>console log</h3>
        </div>
    )
}


export default TestAuction