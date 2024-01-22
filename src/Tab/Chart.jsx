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
                        <ChartHeader className='chart-header chart-header-corner'>
                            <ChartIcon cell={chart.outcomeTable.corner} />
                        </ChartHeader>
                        {chart.outcomeTable.header.filter((e) => chart.show.includes(e))?.map((elementKey, index) => (
                            <ChartHeader className='chart-header chart-header-enemy' key={index}>
                                <ChartIcon cell={chart.elementDetail[elementKey]} />
                            </ChartHeader>
                        ))}
                    </tr>
                    {Object.keys(chart.outcomeTable).filter((e) => chart.show.includes(e))?.map((outcomes, rowIndex) => (
                        <tr key={rowIndex + 1}>
                            <ChartHeader className={"chart-header chart-header-player " + (game.turn == 0 ? "chart-header-player-active" : "")}>
                                <ChartIcon cell={chart.elementDetail[chart.outcomeTable.header[rowIndex]]} />
                            </ChartHeader>
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

function ChartHeader({ children, className, onClick }) {
    const game = useContext(GameContext);
    return <th className={className}>
        <button onClick={event => game.onClick(event, )}>
        {children}
        </button>
    </th>
}