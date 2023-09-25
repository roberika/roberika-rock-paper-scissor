import { useState } from 'react'

export default function Chart({ chart }) {
    return (
        <div className='chart' >
            <table className='chart-table'>
                <tbody>
                    <tr key="0" className='chart-header chart-header-row'>
                        <th className='chart-header-corner'>{chart.outcomeTable.corner}</th>
                        {chart.outcomeTable.header.map((element, index) => (
                            <th key={index}>{element}</th>
                        ))}
                    </tr>
                    {Object.keys(chart.outcomeTable).filter((e) => chart.show.includes(e))?.map((outcomes, rowIndex) => (
                        <tr key={rowIndex + 1}>
                            <th className="chart-header chart-header-column">{chart.outcomeTable.header[rowIndex]}</th>
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