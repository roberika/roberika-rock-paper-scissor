import { useState, useContext, useEffect, } from 'react'
import { ChartContext } from '../Context/ChartContext.jsx'
import { GameContext } from '../Context/GameContext.jsx';

export default function Chart() {

    var chart = useContext(ChartContext);
    const game = useContext(GameContext);

    const [cornerIcon, setCornerIcon] = useState({
        key: "header",
        icon: chart.outcomeTable.corner.icons[0],
        text: "Select your hand!",
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
        <div className=''>
            <div className='chart z-10'>
                <table className='relative z-10'>
                    <tbody>
                        <tr key="0">
                            {(game.show.length == 0 
                            ?  <th className={"chart-header chart-header-corner chart-header-corner-reset"}>
                                <button onClick={event => {
                                    game.resetGame();
                                }}>
                                <ChartIcon cell={chart.outcomeTable.reset}/>
                                </button>
                            </th>
                            : <ChartHeader 
                                className={'chart-header chart-header-corner ' + (game.selection == "none" ? "" : "chart-header-corner-selected")}
                                cell={(game.selection == "none" 
                                        ? cornerIcon 
                                        : chart.elementDetail[game.selection])}
                                />
                            )}
                            
                            {Object.keys(chart.outcomeTable).filter((e) => game.hands.includes(e))?.map((elementKey, index) => (
                                <ChartHeader 
                                    className='chart-header chart-header-enemy' 
                                    key={index}
                                    cell={chart.elementDetail[elementKey]}
                                     />
                            ))}
                        </tr>
                        {Object.keys(chart.outcomeTable).filter((e) => game.hands.includes(e))?.map((outcomes, rowIndex) => (
                            <tr key={rowIndex + 1}>
                                <ChartHeader 
                                    className={
                                        "chart-header chart-header-player " + 
                                        (game.turn == 0 ? "chart-header-player-active" : "")
                                    }
                                    cell={chart.elementDetail[outcomes]}
                                     />
                                {Object.keys(chart.outcomeTable[outcomes]).filter((e) => game.hands.includes(e))?.map((outcomeKey, cellIndex) => (
                                    <ChartContent 
                                        cell={chart.outcomeDetail[chart.outcomeTable[outcomes][outcomeKey]]} 
                                        key={cellIndex} />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
                <ResultsBanner/>
            </div>
        </div>
    )
}

function ResultsBanner() {
    const game = useContext(GameContext);

    return <div className={'results-layer-1 ' + (game.resetBanner == 0 ? "results-layer-1-invisible" : "results-layer-1-visible results-layer-1-fading")}>
        <div className={'results-layer-2 ' + (game.results[game.result].classNames.layer2) +
            (game.resetBanner == 0 ? " results-layer-2-invisible" : " results-layer-2-appearing")}>
            <div className={"results-layer-3 " + (game.results[game.result].classNames.layer3)}>
                <p>{game.results[game.result].text}</p>
            </div>
        </div>
    </div>
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
    const chart = useContext(ChartContext);
    const game = useContext(GameContext);

    return <th className={className + (game.selection == cell.key ? " chart-header-selected" : "")}>
        <button onClick={event => {
            game.onClick(event, cell.key, game, chart);
        }}>
        <ChartIcon cell={cell}/>
        </button>
    </th>
}