import React from 'react'

import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ buttonActive, setModalActive, setButtonActive }) => {

    const { situation, thoughts, feelings, reactions } = buttonActive

    const handleCloseModal = () => {
        setButtonActive({
            situation: false,
            thoughts: false,
            feelings: false,
            reactions: false
        })
        setModalActive(true)
    }

    if (situation) {
        return (
            <div className="modal" onClick={() => console.log('klikniete')}>
                <div className="modal-content">
                    describe your situation
                    <AiOutlineClose onClick={() => handleCloseModal()} />
                </div>
            </div>
        )
    }

    if (thoughts) {
        return (
            <div className="modal">
                <div className="modal-content">
                    describe your thoughts
                    <AiOutlineClose onClick={() => handleCloseModal()} />
                </div>
            </div>
        )
    }

    if (feelings) {
        return (
            <div>
                <div className="modal">
                    <div className="modal-content">
                        describe your feelings
                        <AiOutlineClose onClick={() => handleCloseModal()} />
                    </div>
                </div>
            </div>
        )
    }

    if (reactions) {
        return (
            <div className="modal">
                <div className="modal-content">
                    describe your reactions
                    <AiOutlineClose onClick={() => handleCloseModal()} />
                </div>
            </div>
        )
    }

    return (
        null
    )

}
export default Modal
