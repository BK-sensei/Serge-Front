import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.div`
    width: 100% 
`

const Button = styled.button`
    height: 70px;
    background: #F0BC97;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

const AuctionButton = () => {
    return (
        <Container>
            <Link to="/auction-room">
                <Button
                    type='button'
                    style={{backgroundColor:"#88B995"}}
                >
                    <img style={{width:"70px"}} src={require('../../images/logos/auction-logo.png')}  alt='' /> 
                </Button>      
            </Link>   
        </Container >  
        
    );
};

export default AuctionButton;