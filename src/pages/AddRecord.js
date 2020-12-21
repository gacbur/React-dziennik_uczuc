import React, { useState, useContext, useEffect } from 'react'

import PageTitle from '../components/PageTitle'
import Modal from '../components/Modal'
import RecordPreview from '../components/RecordPreview'

import { GlobalContext } from '../context/GlobalContext'

import { GiDirectionSigns, GiBrain } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'


const AddRecord = () => {

    const { recordValues, handleAddNewRecord, AddRecordMessage } = useContext(GlobalContext)

    const {
        situationValue,
        thoughtsValue,
        feelingsValue,
        reactionsValue } = recordValues

    const [buttonActive, setButtonActive] = useState({
        situation: false,
        thoughts: false,
        feelings: false,
        reactions: false
    })

    const [modalActive, setModalActive] = useState(true)

    const { situation, thoughts, feelings, reactions } = buttonActive

    const [showRecordPreview, setShowRecordPreview] = useState(false)

    useEffect(() => {

        const handleShowRecordPreview = () => {
            if (situationValue && thoughtsValue && feelingsValue && reactionsValue !== '') {
                setShowRecordPreview(true)
            }
            else {
                setShowRecordPreview(false)
            }
        }

        handleShowRecordPreview()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [recordValues])

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
                            <GiDirectionSigns className="add-record-btn-icon" /> Sytuacja
                        </button>
                        <button
                            onClick={() => setButtonActive({ ...buttonActive, thoughts: !thoughts })}
                            className="add-record-btn"
                        >
                            <GiBrain className="add-record-btn-icon" /> Myśli
                        </button>
                        <button
                            onClick={() => setButtonActive({ ...buttonActive, feelings: !feelings })}
                            className="add-record-btn"
                        >
                            <FaHeart className="add-record-btn-icon" /> Uczucia
                        </button>
                        <button
                            onClick={() => setButtonActive({ ...buttonActive, reactions: !reactions })}
                            className="add-record-btn"
                        >
                            <BsFillPersonFill className="add-record-btn-icon" /> Reakcje
                        </button>
                    </div>
                    {modalActive ? <Modal buttonActive={buttonActive} setButtonActive={setButtonActive} setModalActive={setModalActive} /> : null}
                </div>
            </div>
            <div className="add-new-record-btn-cnt">
                <button onClick={() => handleAddNewRecord()} className="add-new-record-btn">Dodaj Wpis</button>
                <span className="add-new-record-message">
                    {AddRecordMessage !== '' ? AddRecordMessage : null}
                </span>
            </div>
            {showRecordPreview ? <RecordPreview setButtonActive={setButtonActive} buttonActive={buttonActive} /> : null}

        </>
    )
}

export default AddRecord
