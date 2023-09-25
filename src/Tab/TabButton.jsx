import { useState } from 'react'

export default function TabButton({ children, index, onClick, selected }) {
    return (
        <button
            id={"tab-" + (index + 1)}
            role='tab'
            aria-selected={index == 1}
            aria-controls={"panel-" + (index + 1)}
            tabIndex={index == 0 ? "0" : "-1"}
            onClick={onClick}
            className={"tab-item " +
                (selected == index ? "tab-item-selected " : "tab-item-active ") +
                (index == 0 ? "tab-item-first " : " ")}>
            {children}
        </button>
    )
}
