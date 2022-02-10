import React, { useContext } from 'react'
import Modal from 'react-modal'

import { ModalContext } from '../../contexts/Modal';

import Ranking from '../Ranking';

const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      zIndex: 20,
      width: '500px',
      borderRadius: '10px',
      position: 'absolute',
    }
}


const ModalContainer = () => {
    const { modalType, visible, setVisible } = useContext(ModalContext)

    const handleClosed = () => {
        if (visible) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    return (
        <>
            <Modal
                isOpen={visible}
                ariaHideApp={false}
                style={modalStyle}
            >
            <button 
                className="button-modale" 
                onClick={handleClosed}>
                <h4>
                    X
                </h4>
            </button>

                {modalType === "ranking" &&
                    <Ranking />
                }
                {/* {modalType === "buying" &&
                    <ModalBuy />
                } */}

            </Modal>
        </>
    );
};

export default ModalContainer;