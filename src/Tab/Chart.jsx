import { useState, useContext, useEffect, } from 'react'
import { ChartContext } from '../Context/ChartContext.jsx'
import { GameContext } from '../Context/GameContext.jsx';

export default function Chart() {

    const chart = useContext(ChartContext);
    const game = useContext(GameContext);
    const [cornerIcon, setCornerIcon] = useState({
        icon: chart.outcomeTable.corner.icons[0],
        text: chart.outcomeTable.corner.text,
    }) 

    useEffect(() => {
        let corner = chart.outcomeTable.corner;
        setTimeout(() => {
            chart.setCornerIconFrame((chart.cornerIconFrame + 1) % corner.icons.length)
            setCornerIcon((prev) => ({
                ...prev,
                icon: corner.icons[chart.cornerIconFrame],
            }));
        }, (chart.cornerIconFrame == 1 ? 1000 : 500));
    }, [cornerIcon]);

    return (
        <div>
            <div className='chart'>
                <table>
                    <tbody>
                        <tr key="0">
                            <ChartHeader className={'chart-header chart-header-corner ' + (game.selection == "none" ? "" : "chart-header-corner-selected")}
                            cell={ game.selection == "none" ? cornerIcon : chart.elementDetail[game.selection]}/>
                            
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
                                    className={
                                        "chart-header chart-header-player " + 
                                        (game.turn == 0 ? "chart-header-player-active" : "")
                                    }
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
            <ChartIcon className={"chart-hand " + (game.selection == "none" ? "invisible" : "visible")} cell={{
                icon: chart.elementDetail[game.selection].handIcon, 
                text: chart.elementDetail[game.selection].text }}/>
        </div>
    )
}

function ChartIcon({ cell, className }) {
    return <img className={className} src={cell.icon} alt={cell.text} />
}

function ChartContent({ cell }) {
    return <td className={cell.className}>
        <ChartIcon cell={cell} />
    </td>
}

function ChartHeader({ className, cell }) {
    const game = useContext(GameContext);
    return <th className={className + (game.selection == cell.key ? " chart-header-selected" : "")}>
        <button onClick={event => game.onClick(event, cell.key, game)}>
        <ChartIcon cell={cell}/>
        </button>
    </th>
}