import { useState } from 'react'

export default function Chart({ chart }) {
    return (
        <div className='chart' >
            <table className='chart-table'>
                <tbody>
                    <tr className='chart-header chart-header-row'>
                        <th>\</th>
                        {chart.outcomeTable.header.map((element, index) => (
                            <th key={index}>{element}</th>
                        ))}
                    </tr>
                    {Object.keys(chart.outcomeTable).filter((e) => chart.show.includes(e))?.forEach((outcomes, index) => (
                        <tr key={index}>
                            <th className='chart-header chart-header-column'>{chart.outcomeTable.header[index]}</th>
                            {chart.outcomeTable[outcomes].map((outcome, index) => (
                                <td className={"chart-outcome-cell " + chart.outcomeDetail[outcome].className} key={index}>
                                    {console.log(chart.outcomeDetail[outcome])}
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