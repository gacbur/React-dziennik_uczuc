import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({ buttonActive, setModalActive, setButtonActive }) => {

    const { recordValues } = useContext(GlobalContext)
    const { handleChangeRecordValues } = useContext(GlobalContext)

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

    console.log(situationValue)

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

    const placeholders = {
        situation: 'Opisz co i gdzie się wydarzyło',
        thoughts: 'Co myślałeś/aś w związku z tą sytuacją',
        feelings: 'Opisz co czułeś/aś własnymi słowami',
        reactions: 'Opisz reakcje ciała i Twoje zachowanie'
    }
    const checkboxes = [
        { type: 'checkbox', name: "fearValue", item_name: 'Lęk', value: fearValue },
        { type: 'checkbox', name: "shameValue", item_name: 'Wstyd', value: shameValue },
        { type: 'checkbox', name: "happinesValue", item_name: 'Radość', value: happinesValue },
        { type: 'checkbox', name: "angerValue", item_name: 'Złość', value: angerValue },
        { type: 'checkbox', name: "sadnessValue", item_name: 'Smutek', value: sadnessValue },
        { type: 'checkbox', name: "neutralValue", item_name: 'Neutralność', value: neutralValue },
        { type: 'checkbox', name: "unconcernValue", item_name: 'Obojętność', value: unconcernValue },
    ]

    if (situation) {
        return (
            <div className="modal" onClick={() => console.log('klikniete')}>
                <div className="modal-content">
                    <span className="modal-title">Sytuacja</span>
                    <textarea className="form-input-control" placeholder={placeholders.situation} type="text" name="situationValue" value={situationValue} onChange={(e) => handleChangeRecordValues(e)}></textarea>
                    <button onClick={() => handleCloseModal()} className="form-btn-control">OK</button>
                    <span> <AiOutlineClose className="modal-close-btn" onClick={() => handleCloseModal()} /></span>
                </div>
            </div>
        )
    }
    if (thoughts) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="modal-title">Myśli</span>
                    <textarea className="form-input-control" placeholder={placeholders.thoughts} type="text" name="thoughtsValue" value={thoughtsValue} onChange={handleChangeRecordValues}></textarea>
                    <button onClick={() => handleCloseModal()} className="form-btn-control">OK</button>
                    <span> <AiOutlineClose className="modal-close-btn" onClick={() => handleCloseModal()} /></span>
                </div>
            </div>
        )
    }
    if (feelings) {
        return (
            <div>
                <div className="modal">
                    <div className="modal-content">
                        <span className="modal-title">Uczucia</span>
                        <span className="modal-feelings-title">Zaznacz odpowiednie uczucie:</span>
                        {checkboxes.map(item => {
                            return (< div key={item.name} className="modal-checkbox-control" >
                                <input type={item.type} name={item.name} value={item.value} onChange={handleChangeRecordValues}></input>
                                <label htmlFor={item.name}>{item.item_name}</label>
                            </div>)
                        })}
                        <textarea className="form-input-control" placeholder={placeholders.feelings} type="text" name="feelingsValue" value={feelingsValue} onChange={handleChangeRecordValues}></textarea>
                        <button onClick={() => handleCloseModal()} className="form-btn-control">OK</button>
                        <span><AiOutlineClose className="modal-close-btn" onClick={() => handleCloseModal()} /></span>
                    </div>
                </div>
            </div >
        )
    }
    if (reactions) {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="modal-title">Reakcje</span>
                    <textarea className="form-input-control" placeholder={placeholders.reactions} type="text" name="reactionsValue" value={reactionsValue} onChange={handleChangeRecordValues}></textarea>
                    <button onClick={() => handleCloseModal()} className="form-btn-control">OK</button>
                    <span> <AiOutlineClose className="modal-close-btn" onClick={() => handleCloseModal()} /></span>
                </div>
            </div>
        )
    }
    return (
        null
    )
}
export default Modal
