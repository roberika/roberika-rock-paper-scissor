import { useContext, useState } from 'react'
import { PanelContext } from '../Context/PanelContext.jsx'
import { GameContext } from '../Context/GameContext.jsx';

export default function Sidebar() {
    const panel = useContext(PanelContext);
    const game = useContext(GameContext);
    return (
        <div className='sidebar hidden' >
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
            className={"text-active sidebar-item"}>
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