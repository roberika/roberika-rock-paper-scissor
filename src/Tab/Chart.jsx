import { useState, useContext } from 'react'
import { ChartContext } from '../Context/ChartContext.jsx'
import { GameContext } from '../Context/GameContext.jsx';

export default function Chart() {
    const chart = useContext(ChartContext);
    const game = useContext(GameContext);

    return (
        <div className='chart'>
            <table>
                <tbody>
                    <tr key="0">
                        <ChartHeader 
                            className='chart-header chart-header-corner' 
                            cell={chart.outcomeTable.corner} />
                        {chart.outcomeTable.header.filter((e) => chart.show.includes(e))?.map((elementKey, index) => (
                            <ChartHeader 
                                className='chart-header chart-header-enemy' 
                                key={index}
                                cell={chart.elementDetail[elementKey]} />
                        ))}
                    </tr>
                    {Object.keys(chart.outcomeTable).filter((e) => chart.show.includes(e))?.map((outcomes, rowIndex) => (
                        <tr key={rowIndex + 1}>
                            <ChartHeader 
                                className={"chart-header chart-header-player " + (game.turn == 0 ? "chart-header-player-active" : "")}
                                cell={chart.elementDetail[chart.outcomeTable.header[rowIndex]]} />
                            {Object.keys(chart.outcomeTable[outcomes]).filter((e) => chart.show.includes(e))?.map((outcomeKey, cellIndex) => (
                                <ChartContent 
                                    cell={chart.outcomeDetail[chart.outcomeTable[outcomes][outcomeKey]]} 
                                    key={cellIndex} />
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

function ChartContent({ cell }) {
    return <td className={cell.className}>
        <ChartIcon cell={cell} />
    </td>
}

function ChartHeader({ className, cell }) {
    const game = useContext(GameContext);
    return <th className={className}>
        <button onClick={event => game.onClick(event, cell.key, game)}>
        <ChartIcon cell={cell}/>
        </button>
    </th>
}