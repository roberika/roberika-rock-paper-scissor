import { useContext, useState } from 'react'
import Chart from "./Chart.jsx"
import Settings from "./Settings.jsx"
import { PanelContext } from '../Context/PanelContext.jsx'

export default function Tab({ chart, panels }) {
    const panel = useContext(PanelContext);

    return (
        <div className='tabs tabs-visibility' >
            <div className="tablist" role='tablist'>
                {Object.keys(panel.panelDetail).filter((e) => panel.show.includes(e))?.map((panelKey, index) => (
                    <TabButton key={index} index={index}>{panel.panelDetail[panelKey].text}</TabButton>
                ))}
            </div>
            {[
                <Chart />,
                <Settings />,
                <hr />,
            ].map((children, index) => (
                <TabPanel key={index} index={index}>
                    {children}
                </TabPanel>
            ))}
        </div>
    )
}

function TabPanel({ children, index }) {
    const panel = useContext(PanelContext);
    return (
        <div
            id={"panel-" + (index + 1)}
            role='tabpanel'
            aria-labelledby={"tab-" + (index + 1)}
            tabIndex="0"
            className={"panel-" + (index + 1) + " tab-panel " +  (panel.selected == index ? "visible" : "hidden")}>
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