import { useState } from 'react'

export default function TabButton({ children, index, onClick, selected }) {
    return (
        <button
            id={"tab-" + index}
            role='tab'
            aria-selected={index == "1"}
            aria-controls={"panel-" + index}
            tabIndex={index == "1" ? "0" : "-1"}
            onClick={onClick}
            className={"tab-item " + (selected == index ? "tab-item-selected" : "tab-item-active")}>
            {children}
        </button>
    )
}
