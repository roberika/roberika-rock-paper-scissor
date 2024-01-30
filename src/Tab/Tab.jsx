import { useContext, useState } from 'react'
import Settings from "./Settings.jsx"
import Glossary from "./Glossary.jsx"
import About from "./About.jsx"
import Log from "./Log.jsx"
import { PanelContext } from '../Context/PanelContext.jsx'
import { ChartContext } from '../Context/ChartContext.jsx'
import { GameContext } from '../Context/GameContext.jsx'

export default function Tab({ }) {
    const panel = useContext(PanelContext);

    return (
        <div className='tabs right-tabs tabs-visibility' >
            <div className="tablist" role='tablist'>
                {Object.keys(panel.panelDetail).filter((e) => panel.show.includes(e))?.map((panelKey, index) => (
                    <TabButton key={index} index={index}>{panel.panelDetail[panelKey].text}</TabButton>
                ))}
            </div>
            {[
                <Log />,
                <Glossary />,
                <About />,
                <Settings />,
            ].map((children, index) => (
                <TabPanel key={index} index={index}>
                    {children}
                </TabPanel>
            ))}
            <HandSprite />
        </div>
    )
}

function HandSprite() {
    const chart = useContext(ChartContext);
    const game = useContext(GameContext);

    return <img className={"chart-hand " + (game.selection == "none" ? "invisible" : "visible")} 
    src={chart.elementDetail[game.selection].handIcon}
    alt={chart.elementDetail[game.selection].text } />
}

export function TabPanel({ children, index }) {
    const panel = useContext(PanelContext);
    return (
        <div
            id={"panel-" + (index + 1)}
            role='tabpanel'
            aria-labelledby={"tab-" + (index + 1)}
            tabIndex="0"
            className={"right-panel panel-" + (index + 1) + " tab-panel " +  (panel.selected == index ? "visible" : "hidden")}>
            {children}
        </div >
    )
}

function TabButton({ children, index }) {
    const panel = useContext(PanelContext);
    return (
        <button
            id={"tab-" + (index + 1)}
            role='tab'
            aria-selected={panel.selected == index}
            aria-controls={"panel-" + (index + 1)}
            tabIndex="0"
            onClick={event => panel.onClick(event, index)}
            className={"tab-item " +
                (panel.selected == index ? "tab-item-selected " : "tab-item-active ") +
                (index == 0 ? "tab-item-first " : " ")}>
            {children}
        </button>
    )
}