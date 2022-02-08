import {useState} from 'react';
import styled from 'styled-components'

import ButtonProfile from '../components/buttons/ButtonProfile'
import BankAccount from '../components/buttons/ButtonProfile'
import CardsList from '../components/lists/CardsList'
import Dice from '../components/Dice'
import ButtonAuction from '../components/buttons/ButtonAuction'


const Container = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    left: 78%;
    right: 0.69%;
    top: 1.34%;
    bottom: 1.43%;
    border-radius: 25px;
    width : 20%;
`


const LeftButton = styled.div`
    position: absolute;
    left: 1.9%;
    right: 55%;
    top: 86.12%;
    bottom: 3.13%;

    background: #88B995;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
`

const SideBar = () => {
    return (
        <Container>
            <ButtonProfile/>
            <BankAccount/>
            <CardsList/>
            <Dice/>
            <ButtonAuction/>
            <LeftButton/>
        </Container>
    );
};

export default SideBar;