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
                <img src={require('../../images/ranking.png')}  alt='' />
            </button>
        </div>
    );
};

export default RankingButton;