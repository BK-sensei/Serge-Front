import {useContext} from 'react'
import { UserContext } from '../contexts/User'; 
import {Link} from 'react-router-dom'
import Profile from './Profile'
const GameBoard = () => {
    const  { user, setUser } = useContext(UserContext)
    console.log(user)
    return (
        <div>
            <p>GameBoard</p>
            <Link to ='/testauction'>
                <p>user</p>
            </Link>
        </div>
    )
}

export default GameBoard