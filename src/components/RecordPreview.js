import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import { BiPencil } from 'react-icons/bi'

const RecordPreview = ({ setButtonActive, buttonActive }) => {

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

    const {
        situation,
        thoughts,
        feelings,
        reactions
    } = buttonActive

    return (
        <div className="record-preview-cnt">
            <h1>Podgląd wpisu</h1>
            <div className="record-preview">
                <div className="record-preview-element">
                    <h2 className="record-preview-title">Sytuacja <BiPencil onClick={() => setButtonActive({ ...buttonActive, reactions: !situation })} className="record-preview-edit-icon" /></h2>
                    <p className="record-preview-text">{situationValue}</p>
                </div>
                <div className="record-preview-element">
                    <h2 className="record-preview-title">Myśli <BiPencil onClick={() => setButtonActive({ ...buttonActive, reactions: !thoughts })} className="record-preview-edit-icon" /></h2>
                    <p className="record-preview-text">{thoughtsValue}</p>
                </div>
                <div className="record-preview-element">
                    <h2 className="record-preview-title">Uczucia <BiPencil onClick={() => setButtonActive({ ...buttonActive, reactions: !feelings })} className="record-preview-edit-icon" /></h2>
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
                    <h2 className="record-preview-title">Reakcje <BiPencil onClick={() => setButtonActive({ ...buttonActive, reactions: !reactions })} className="record-preview-edit-icon" /></h2>
                    <p className="record-preview-text">{reactionsValue}</p>
                </div>
            </div>
        </div>
    )
}

export default RecordPreview
