import { useState } from 'react'
import TabButton from "./TabButton.jsx"
import TabPanel from "./TabPanel.jsx"
import Chart from "./Chart.jsx"
import Settings from "./Settings.jsx"

export default function Tab({ chart, panels }) {

    const [selected, setSelected] = useState(0);

    const moveTab = (event, tab) => {
        setSelected(tab);
    }

    return (
        <div className='tabs tabs-visibility' >
            <div className="tablist" role='tablist'>
                {panels.map((label, index) => (
                    <TabButton key={index} index={index} onClick={event => moveTab(event, index)} selected={selected}>{label}</TabButton>
                ))}
            </div>
            <div className='flex-grow'>
                {[
                    <Chart chart={chart} />,
                    <Settings />,
                    <hr />,
                ].map((children, index) => (
                    <TabPanel key={index} index={index} selected={selected}>
                        {children}
                    </TabPanel>
                ))}
            </div>
        </div>
    )
}