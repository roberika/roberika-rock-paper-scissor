import { useState } from 'react'

export default function SidebarButton({ children, onClick }) {
    return (
        <button
            onClick={onClick}
            className={"sidebar-item"}>
            {children}
        </button>
    )
}