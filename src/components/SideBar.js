import styled from 'styled-components'
import { Link } from 'react-router-dom';

import ProfileButton from './buttons/ProfileButton'
import BankAccount from '../components/BankAccount'
import CardsList from '../components/lists/CardsList'
import Dice from '../components/Dice'
import MapButton from './buttons/MapButton'
import AuctionButton from './buttons/AuctionButton'
import RankingButton from './buttons/RankingButton'
import ModalContainer from './modals/ModalContainer';


const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 78%;
    right: 0.69%;
    top: 1.34%;
    bottom: 1.43%;
    border-radius: 25px;
    width : 20%;
    padding: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Buttons = styled.div`
   display: flex;
   justify-content: space-between;
   width:100%;
`

const SideBar = () => {
    return (
        <Container>
            <div>
                <Link to="/profile">
                    <ProfileButton/>
                </Link>
                <BankAccount/>
                <CardsList/>
            </div>
            <Dice/>
            <Buttons>
                <MapButton/>
                <AuctionButton/>
                <RankingButton/>  
            </Buttons >
            <ModalContainer />
        </Container>
    );
};

export default SideBar;