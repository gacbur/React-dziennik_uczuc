import React, { useState } from 'react'

import PageTitle from '../components/PageTitle'
import ApprovalModal from '../components/ApprovalModal'

import { ImBin } from 'react-icons/im'

const Options = () => {

    const [showApprovalModal, setShowApprovalModal] = useState(false)
    const [recordsDeletedNotification, setRecordsDeletedNotification] = useState('')

    const handleShowRecordsDelNotif = () => {
        setRecordsDeletedNotification('Wpisy zostały usunięte!')
        setTimeout(() => setRecordsDeletedNotification(''), 3000)
    }

    return (
        <>
            <PageTitle title="Opcje" />
            <div className="options-cnt">
                <button
                    onClick={() => setShowApprovalModal(prevState => !prevState)}
                    className="options-delete-btn">Usuń wszystkie wpisy
                <ImBin className="options-delete-btn-icon" /></button>
                <span className='records-delete-text' >
                    {recordsDeletedNotification !== '' ? recordsDeletedNotification : null}
                </span>
            </div>
            <ApprovalModal showApprovalModal={showApprovalModal} showModal={setShowApprovalModal} recordsDeletedNotification={recordsDeletedNotification} handleShowRecordsDelNotif={handleShowRecordsDelNotif} />
        </>
    )
}
export default Options
