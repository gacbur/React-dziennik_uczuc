import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import { ImBin } from 'react-icons/im'

const Record = ({ item }) => {

    const { handleDeleteRecord } = useContext(GlobalContext)

    return (
        <div className="record">
            <div className="record-date">
                {item.date}
            </div>
            <div className="record-content-columns-cnt">
                <div className="record-content-column">
                    <h3>Sytuacja</h3>
                    <p>{item.situationValue}</p>
                </div>
                <div className="record-content-column">
                    <h3>Myśli</h3>
                    <p>{item.thoughtsValue}</p>
                </div>
                <div className="record-content-column">
                    <h3>Uczucia</h3>
                    <p>{item.feelingsValue}</p>
                    {item.fearValue ? <p className="record-feeling-text">Lęk</p> : null}
                    {item.shameValue ? <p className="record-feeling-text">Wstyd</p> : null}
                    {item.happinesValue ? <p className="record-feeling-text">Radość</p> : null}
                    {item.angerValue ? <p className="record-feeling-text">Złość</p> : null}
                    {item.sadnessValue ? <p className="record-feeling-text">Smutek</p> : null}
                    {item.neutralValue ? <p className="record-feeling-text">Neutralność</p> : null}
                    {item.unconcernValue ? <p className="record-feeling-text">Obojętność</p> : null}
                </div>
                <div className="record-content-column">
                    <h3>Reakcje</h3>
                    <p>{item.reactionsValue}</p>
                </div>
                <div className="record-content-column delete-column">
                    <button className="record-delete">
                        <ImBin className="record-delete-icon" onClick={() => handleDeleteRecord(item.id)} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Record
