import { useState } from 'react'

export default function Chart({ chart }) {
    return (
        <div className='chart' >
            <table className='chart-table'>
                <tbody>
                    <tr key="0">
                        <th className='chart-header chart-header-corner'>{chart.outcomeTable.corner}</th>
                        {chart.outcomeTable.header.map((element, index) => (
                            <th className='chart-header chart-header-row' key={index}>
                                <img className='chart-icon'
                                    src={chart.elementDetail[element].icon}
                                    alt={chart.elementDetail[element].element} />
                            </th>
                        ))}
                    </tr>
                    {Object.keys(chart.outcomeTable).filter((e) => chart.show.includes(e))?.map((outcomes, rowIndex) => (
                        <tr key={rowIndex + 1}>
                            <th className="chart-header chart-header-column">
                                <img className='chart-icon'
                                    src={chart.elementDetail[chart.outcomeTable.header[rowIndex]].icon}
                                    alt={chart.elementDetail[chart.outcomeTable.header[rowIndex]].element} />
                            </th>
                            {chart.outcomeTable[outcomes].map((outcome, cellIndex) => (
                                <td className={"chart-outcome-cell " + chart.outcomeDetail[outcome].className} key={cellIndex}>
                                    {chart.outcomeDetail[outcome].outcome}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <hr />
        </div >
    )
}