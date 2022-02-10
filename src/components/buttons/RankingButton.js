import { useContext } from 'react'
import { ModalContext } from '../../contexts/Modal';

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