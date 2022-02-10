import { useContext } from 'react'
import { UserContext } from '../../contexts/User'

import styled from 'styled-components'

import ItemProperties from '../ItemProperties'

const Container = styled.div`
    background: #F5EEC7;
    border: 3px solid #E1BF00;
    box-sizing: border-box;
    box-shadow: inset -2px 2px 2px 2px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    height: 260px;
    margin-top: 5px;  
`

const List = styled.div`
    margin: 15px;
    height: 90%;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px rgb(225, 191, 0); 
        border-radius: 10px;
        margin-right: 5px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: rgb(225, 191, 0); 
        border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: rgba(225, 191, 0, 0,5); 
    }   
`

const CardsList = () => {
    const { user } = useContext(UserContext)
    // console.log("user", user.properties)

    return (
        <Container>
            {user.properties ? 
                <List>
                    {user.properties.map((property,index) =>
                        <ItemProperties
                            key={index}
                            property={property}
                        />
                    )}
                </List>    
                :
                <p>Aucune propriété</p>
            }              
        </Container>
    );
};

export default CardsList;