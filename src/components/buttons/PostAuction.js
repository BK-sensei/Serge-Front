import React from 'react';
import styled from 'styled-components'
import sergeBilleys from '../../images/billet.png'

const PostAuctionContainer = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px
`

const ButtonPostAuction = styled.div`
    width: 200px;
    background-color: #AD3838; 
`

const OneHundred = styled.div`
    font-size: 25px;
    font-weight: bold;
    color: white; 
    padding-right: 10px;
`

const YourAuction = styled.h3`
    font-size: 28px;
    color: white;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
`

const PostAuction = (props) => {
    return (
        <PostAuctionContainer>
            <YourAuction style={{color:'white'}}>VOTRE MISE</YourAuction>
            <ButtonPostAuction
                type='button'
                className='logo-btn'
                onClick={props.sendBid}
            >
                <OneHundred>+ 100§</OneHundred>
                <img src={sergeBilleys} alt='billets' style={{width:'50px', transform:'rotate(-9.51deg)'}} />
            </ButtonPostAuction>
        </PostAuctionContainer>
    );
};

export default PostAuction;