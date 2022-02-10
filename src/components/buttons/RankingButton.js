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
        <div>
            <button
                type='button'
                onClick={() => handleRankingClick("ranking")}
                className='logo-btn'
            >
                <img src={require('../../images/ranking.png')}  alt='' 
                style={{position:"absolute", width:'60px', height: "60px"}} />
            </button>
        </div>
    );
};

export default RankingButton;