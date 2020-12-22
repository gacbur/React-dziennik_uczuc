import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import { AiOutlineClose } from 'react-icons/ai'

const ApprovalModal = ({ showApprovalModal, showModal, handleShowRecordsDelNotif }) => {

    const { handleDeleteAllRecords } = useContext(GlobalContext)

    const handleDeleteApprovalBtn = () => {
        handleDeleteAllRecords()
        showModal(false)
        handleShowRecordsDelNotif()
    }

    return (
        <div className={`approval-modal ${showApprovalModal ? 'show' : ''}`} >
            <div className="approval-modal-content">
                <div className="approval-modal-text-cnt">
                    <p className="approval-modal-text">Czy na pewno chcesz usunąć wszystkie wpisy?</p>
                </div>
                <div className="approval-modal-bttm-cnt">
                    <div className="approval-modal-bttm-left-cnt approval-no" >
                        <button onClick={() => showModal(false)}>Nie</button>
                    </div>
                    <div className="approval-modal-bttm-right-cnt approval-yes">
                        <button onClick={() => handleDeleteApprovalBtn()} >Tak</button>
                    </div>
                </div>
                <button onClick={() => showModal(false)} className="approval-modal-close-btn"><AiOutlineClose /></button>
            </div>
        </div >
    )
}

export default ApprovalModal
