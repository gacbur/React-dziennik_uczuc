import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import PageTitle from '../components/PageTitle'
import Modal from '../components/Modal'

import { GiDirectionSigns, GiBrain } from 'react-icons/gi'
import { FaHeart } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'



const AddRecord = () => {

    const { recordValues } = useContext(GlobalContext)

    const {
        situationValue,
        thoughtsValue,
        feelingsValue,
        reactionsValue,
        fearValue,
        shameValue,
        happinesValue,
        angerValue,
        sadnessValue,
        neutralValue,
        unconcernValue, } = recordValues

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
                <button className="add-new-record-btn">Dodaj Wpis</button>
            </div>
            <div className="record-preview-cnt">
                <h1>Podgląd wpisu</h1>
                <div className="record-preview">
                    <div className="record-preview-element">
                        <h2 className="record-preview-title">Sytuacja</h2>
                        <p className="record-preview-text">{situationValue}</p>
                    </div>
                    <div className="record-preview-element">
                        <h2 className="record-preview-title">Myśli</h2>
                        <p className="record-preview-text">{thoughtsValue}</p>
                    </div>
                    <div className="record-preview-element">
                        <h2 className="record-preview-title">Uczucia</h2>
                        <p className="record-preview-text">{feelingsValue}</p>
                        {fearValue ? <p className="record-preview-text">Uczucie: Lęk</p> : null}
                        {shameValue ? <p className="record-preview-text">Uczucie: Wstyd</p> : null}
                        {happinesValue ? <p className="record-preview-text">Uczucie: Radość</p> : null}
                        {angerValue ? <p className="record-preview-text">Uczucie: Złość</p> : null}
                        {sadnessValue ? <p className="record-preview-text">Uczucie: Smutek</p> : null}
                        {neutralValue ? <p className="record-preview-text">Uczucie: Neutralność</p> : null}
                        {unconcernValue ? <p className="record-preview-text">Uczucie: Obojętność</p> : null}
                    </div>
                    <div className="record-preview-element">
                        <h2 className="record-preview-title">Reakcje</h2>
                        <p className="record-preview-text">{reactionsValue}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddRecord
