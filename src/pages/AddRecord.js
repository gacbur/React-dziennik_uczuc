import React, { useState, useEffect } from 'react'

import PageTitle from '../components/PageTitle'
import Modal from '../components/Modal'

const AddRecord = () => {

    const [buttonActive, setButtonActive] = useState({
        situation: false,
        thoughts: false,
        feelings: false,
        reactions: false
    })

    const [modalActive, setModalActive] = useState(true)

    const { situation, thoughts, feelings, reactions } = buttonActive

    return (
        <>
            <PageTitle title="Dodaj wpis" />
            <div className="add-record-cnt">
                <div className="add-record">
                    <div className="add-record-btn-cnt">
                        <button
                            onClick={() => setButtonActive({ ...buttonActive, situation: !situation })}
                            className="add-record-btn"
                        >
                            Sytuacja
                        </button>
                        <button
                            onClick={() => setButtonActive({ ...buttonActive, thoughts: !thoughts })}
                            className="add-record-btn"
                        >
                            Myśli
                        </button>
                        <button
                            onClick={() => setButtonActive({ ...buttonActive, feelings: !feelings })}
                            className="add-record-btn"
                        >
                            Uczucia
                        </button>
                        <button
                            onClick={() => setButtonActive({ ...buttonActive, reactions: !reactions })}
                            className="add-record-btn"
                        >
                            Reakcje
                        </button>
                    </div>
                    {modalActive ? <Modal buttonActive={buttonActive} setButtonActive={setButtonActive} setModalActive={setModalActive} /> : null}
                </div>
            </div>
        </>
    )
}

export default AddRecord
