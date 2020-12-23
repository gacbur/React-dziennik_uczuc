import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalContext'

const RecordsFilter = () => {

    const { sortingValues, records, handleUpdateFilterValues } = useContext(GlobalContext)

    const { date } = sortingValues

    const getUnique = (items, value) => {
        return [...new Set(items.map(item => item[value]))];
    };

    let dates = getUnique(records, 'date');
    dates = ["all", ...dates];
    dates = dates.map((item, index) => (
        <option key={index} value={item}>{item}</option>
    ));

    return (
        <form className="records-filter-form">
            <div className="form">
                <label htmlFor="date">Data </label>
                <select
                    name="date"
                    id="date"
                    value={date}
                    onChange={handleUpdateFilterValues}
                >
                    {dates}
                </select>
            </div>
        </form>

    )
}

export default RecordsFilter
