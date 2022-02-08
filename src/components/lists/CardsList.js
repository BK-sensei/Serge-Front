import styled from 'styled-components'

const Container = styled.div`

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
    ::-webkit-scrollbar {
    width: 15px;
    height : 70%;
    }

    ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
    }
    
    ::-webkit-scrollbar-thumb {
    background: red; 
    border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
    background: #b30000; 
    }
    `

const CardsList = () => {
    return (
        <Container>
            
        </Container>
    );
};

export default CardsList;