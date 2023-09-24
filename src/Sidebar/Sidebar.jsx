import { useState } from 'react'
import SidebarButton from "./SidebarButton.jsx"
import SidebarPanel from "./SidebarPanel.jsx"

export default function Sidebar() {
    return (
        <div className='sidebar sidebar-visibility' >
            <SidebarButton>Charts</SidebarButton>
            <SidebarButton>Settings</SidebarButton>
        </div>
    )
}