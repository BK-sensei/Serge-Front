import React, { useContext } from 'react'
import Modal from 'react-modal'

import { ModalContext } from '../../contexts/Modal';
import { UserContext } from '../../contexts/User';

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
      position: 'absolute'
    }
}

const closedButton = {
    content: {
        display: 'block'
    }
}

const ModalContainer = () => {
    const { modalType, visible, setVisible } = UserContext(ModalContext)

    const handleModal = () => {
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
                type='button'
                onClick={handleModal}
                style={closedButton}
            >
                X
            </button>

                {modalType === "ranking" &&
                    <Ranking />
                }

            </Modal>
        </>
    );
};

export default ModalContainer;