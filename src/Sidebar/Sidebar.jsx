import { useContext, useState } from 'react'
import { PanelContext } from '../Context/PanelContext.jsx'

export default function Sidebar() {
    const panel = useContext(PanelContext);
    return (
        <div className='sidebar sidebar-visibility' >
            {Object.keys(panel.panelDetail).filter((e) => panel.show.includes(e))?.map((panelKey, index) => (
                <SidebarButton key={index}>{panel.panelDetail[panelKey].text}</SidebarButton>
            ))}
        </div>
    )
}

function SidebarButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={"sidebar-item"}>
            {children}
        </button>
    )
}

function SidebarPanel() {

    return (
        <div className='h-screen flex flex-col tabs tabs-visibility' >

        </div>
    )
}