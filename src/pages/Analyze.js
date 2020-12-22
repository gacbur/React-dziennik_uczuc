import React, { useContext, useEffect, useState } from 'react'

import { GlobalContext } from '../context/GlobalContext'

import PageTitle from '../components/PageTitle'
import NoContentHere from '../components/NoContentHere'

import { PieChart, Pie, Tooltip, } from 'recharts'

const Analyze = () => {

    const { records } = useContext(GlobalContext)

    const [data, setData] = useState()

    useEffect(() => {

        const getCurrentAnalyzeValues = () => {

            const fear = records.filter(item => item.fearValue === true)
            const shame = records.filter(item => item.shameValue === true)
            const happiness = records.filter(item => item.happinesValue === true)
            const anger = records.filter(item => item.angerValue === true)
            const sadness = records.filter(item => item.sadnessValue === true)
            const neutral = records.filter(item => item.neutralValue === true)
            const unconcern = records.filter(item => item.unconcernValue === true)

            const dataTemp = [
                { name: 'Lęk', value: fear.length },
                { name: 'Wstyd', value: shame.length },
                { name: 'Radość', value: happiness.length },
                { name: 'Złość', value: anger.length },
                { name: 'Smutek', value: sadness.length },
                { name: 'Neutralność', value: neutral.length },
                { name: 'Obojętność', value: unconcern.length },
            ]

            setData(dataTemp)
        }
        getCurrentAnalyzeValues()
    }, [records])

    return (
        <>
            <PageTitle title="Twoja analiza" />
            {records.length === 0 ? <NoContentHere text="Brak analizy, dodaj wpisy!" /> : null}
            <div className="analyze-chart-cnt">
                <div className="analyze chart">
                    <PieChart
                        width={400}
                        height={400}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={data}
                            cx={200}
                            cy={200}
                            outerRadius={170}
                            fill="#106fbd"
                            label />
                        <Tooltip />
                    </PieChart>
                </div>
            </div>
        </>
    )
}

export default Analyze
