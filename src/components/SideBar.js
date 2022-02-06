import {useState} from 'react';

import styled from 'styled-components'


const Container = styled.div`
    background-color : #E5E5E5;
    width : 20%;
    position: absolute;
    left: 78%;
    right: 0.69%;
    top: 1.34%;
    bottom: 1.43%;
    `
const UserContainer = styled.div`
    position: absolute;
    left: 1.68%;
    right: 1.68%;
    top: 2.42%;
    bottom: 88.63%;
    background: #C7E4EE;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    `
const BankContainer = styled.div`
    position: absolute;
    left: 1.68%;
    right: 1.68%;
    top: 12.71%;
    bottom: 73.59%;

    background: #E1F2CC;
    border: 5px solid #2D4E30;
    box-sizing: border-box;
    border-radius: 30px;
    `
const CardsContainer = styled.div`

    position: absolute;
    left: 1.68%;
    right: 1.68%;
    top: 27.75%;
    bottom: 28.92%;

    background: #F5EEC7;
    border: 5px solid #E1BF00;
    box-sizing: border-box;
    border-radius: 30px;

    overflow-y: scroll;

    `
const Dicediv = styled.div`
    position: absolute;
    left: 78.99%;
    right: 6.54%;
    top: 65.26%;
    bottom: 17.15%;

    background: url(./img/dice.png);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    `
const RightButton = styled.div`
    position: absolute;
    left: 87.09%;
    right: 1.91%;
    top: 86.12%;
    bottom: 3.13%;

    background: #F0BC97;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    `
const LeftButton = styled.div`
    position: absolute;
    left: 75.06%;
    right: 13.95%;
    top: 86.12%;
    bottom: 3.13%;

    background: #88B995;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    `

const SideBar = () => {
    const {isHome, setIshome}= useState(true)
    return (
        <Container>
            <UserContainer/>
            <BankContainer/>
            <CardsContainer/>
            <Dicediv/>
            <RightButton/>
            {/* <img src = "../img/dice.png" /> */}
        </Container>
    );
};

export default SideBar;