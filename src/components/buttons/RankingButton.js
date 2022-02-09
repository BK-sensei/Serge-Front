import { useContext } from 'react'
import { ModalContext } from '../../contexts/Modal';
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const Container = styled.button`
    height: 70px;
    width:50%;
    background: #F0BC97;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
`

const RankingButton = () => {
    const { handleRankingClick } = useContext(ModalContext)

    return (
        <Container
            type='button'
            onClick={() => handleRankingClick("ranking")}
        >
            <img style={{ width:"50px" }} src={require('../../images/ranking.png')} alt='' />
        </Container>
    );
};

export default RankingButton;