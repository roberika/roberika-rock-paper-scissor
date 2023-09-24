import { useState } from 'react'
import TabButton from "./TabButton.jsx"
import TabPanel from "./TabPanel.jsx"

export default function Tab() {

    const [selected, setSelected] = useState(1);

    const moveTab = (event, tab) => {
        setSelected(tab);
    }

    return (
        <div className='tabs tabs-visibility' >
            <div className="tablist" role='tablist'>
                <TabButton index="1" onClick={event => moveTab(event, 1)} selected={selected}>Chart</TabButton>
                <TabButton index="2" onClick={event => moveTab(event, 2)} selected={selected}>Settings</TabButton>
            </div>
            <div className='flex-grow'>
                <TabPanel index="1" selected={selected}>
                    Hey guys it's Markiplier.
                </TabPanel>
                <TabPanel index="2" selected={selected}>
                    Top of the morning to you laddies.
                </TabPanel>
            </div>
        </div>
    )
}