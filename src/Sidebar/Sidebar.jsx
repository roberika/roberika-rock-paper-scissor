import { useState } from 'react'
import SidebarButton from "./SidebarButton.jsx"
import SidebarPanel from "./SidebarPanel.jsx"

export default function Sidebar({ panels }) {
    return (
        <div className='sidebar sidebar-visibility' >
            {panels.map((label, index) => (
                <SidebarButton key={index}>{label}</SidebarButton>
            ))}
        </div>
    )
}