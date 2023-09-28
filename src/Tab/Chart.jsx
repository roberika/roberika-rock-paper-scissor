import { useState, useContext } from 'react'
import { ChartContext } from '../Context/ChartContext.jsx'

export default function Chart() {
    const chart = useContext(ChartContext);

    return (
        <table className='chart' >
            <tbody>
                <tr key="0">
                    <th className='chart-header-corner'>
                        <ChartIcon cell={chart.outcomeTable.corner} />
                    </th>
                    {chart.outcomeTable.header.map((elementKey, index) => (
                        <th className='chart-header-row' key={index}>
                            <ChartIcon cell={chart.elementDetail[elementKey]} />
                        </th>
                    ))}
                </tr>
                {Object.keys(chart.outcomeTable).filter((e) => chart.show.includes(e))?.map((outcomes, rowIndex) => (
                    <tr key={rowIndex + 1}>
                        <th className="chart-header-column">
                            <ChartIcon cell={chart.elementDetail[chart.outcomeTable.header[rowIndex]]} />
                        </th>
                        {chart.outcomeTable[outcomes].map((outcomeKey, cellIndex) => (
                            <td className={chart.outcomeDetail[outcomeKey].className} key={cellIndex}>
                                <ChartIcon cell={chart.outcomeDetail[outcomeKey]} />
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

function ChartIcon({ cell }) {
    return <img src={cell.icon} alt={cell.text} />
}