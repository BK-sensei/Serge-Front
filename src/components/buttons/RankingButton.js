import { useContext } from 'react'

import { ModalContext } from '../../contexts/Modal';
// import { handleModal } from '../../components/modals/ModalContainer'

const RankingButton = () => {
    const { handleRankingClick } = useContext(ModalContext)

    // const handleModal = (modalType) => {
    //     setModalType(modalType)
    //     if (visible) {
    //         setVisible(false)
    //     } else {
    //         setVisible(true)
    //     }
    // }

    return (
        <div>
            <button
                type='button'
                onClick={() => handleRankingClick("ranking")}
            >
                <img src={require('../../images/ranking.png')} className='nft' alt='' />
            </button>
        </div>
    );
};

export default RankingButton;