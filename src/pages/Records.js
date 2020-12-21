import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import PageTitle from '../components/PageTitle'
import Record from '../components/Record'

const Records = () => {

    const { records } = useContext(GlobalContext)

    return (
        <>
            <PageTitle title="Moje wpisy" />
            <div className="records-cnt">
                <div className="records">
                    {records.map(item => (
                        <Record key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Records