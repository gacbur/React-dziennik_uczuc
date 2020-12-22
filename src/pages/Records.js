import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import PageTitle from '../components/PageTitle'
import RecordsFilter from '../components/RecordsFilter'
import NoContentHere from '../components/NoContentHere'
import Record from '../components/Record'

const Records = () => {

    const { sortedRecords, records } = useContext(GlobalContext)

    return (
        <>
            <PageTitle title="Moje wpisy" />
            <RecordsFilter />
            {records.length === 0 ? <NoContentHere text="Nie ma tu jeszcze żadnych wpisów..." /> : null}
            <div className="records-cnt">
                <div className="records">
                    {sortedRecords.map(item => (
                        <Record key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Records