import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    left: 1.68%;
    right: 1.68%;
    top: 1%;
    bottom: 88%;
    background: rgb(31, 46, 128);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    padding: 5px;

    :hover{
        filter: brightness(85%);
        cursor: pointer;
    }
`

const ButtonProfile = () => {
    return (
        <Container>
            
        </Container>
    );
};

export default ButtonProfile;