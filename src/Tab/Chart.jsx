import { useState, useContext } from 'react'
import { ChartContext } from '../Context/ChartContext.jsx'

export default function Chart() {
    const chart = useContext(ChartContext);

    return (
        <div className='chart'>
            <table>
                <tbody>
                    <tr key="0">
                        <th className='chart-header-corner'>
                            <ChartIcon cell={chart.outcomeTable.corner} />
                        </th>
                        {chart.outcomeTable.header.filter((e) => chart.show.includes(e))?.map((elementKey, index) => (
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
                            {console.log(Object.keys(chart.outcomeTable[outcomes]).filter((e) => chart.show.includes(e)))}
                            {Object.keys(chart.outcomeTable[outcomes]).filter((e) => chart.show.includes(e))?.map((outcomeKey, cellIndex) => (
                                <td className={chart.outcomeDetail[chart.outcomeTable[outcomes][outcomeKey]].className} key={cellIndex}>
                                    <ChartIcon cell={chart.outcomeDetail[chart.outcomeTable[outcomes][outcomeKey]]} />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

function ChartIcon({ cell }) {
    return <img src={cell.icon} alt={cell.text} />
}