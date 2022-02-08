import styled from 'styled-components'

const Container = styled.button`
    position: absolute;
    left: 55%;
    right: 1.91%;
    top: 86.12%;
    bottom: 3.13%;

    background: #F0BC97;
    background
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    `

const AuctionButton = () => {
    return (
        <div>
            <button
                type='button'
                className='logo-btn'
                style={{backgroundColor:"#88B995"}}
            >
                <img src={require('../../images/logos/auction-logo.png')}  alt='' />
            </button>
        </div>
    );
};

export default AuctionButton;