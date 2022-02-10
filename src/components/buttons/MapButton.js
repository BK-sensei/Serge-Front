import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Button = styled.button`
    height: 70px;
    background: #F0BC97;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

const MapButton = () => {
    return (
        <Link to="/auction-room">
            <Button
                type='button'
                style={{backgroundColor:"#DFD3C3"}}
            >
                <img style={{width:"70px"}} src={require('../../images/logos/map-logo.png')}  alt='' /> 
            </Button>      
        </Link>   
    );
};

export default MapButton;