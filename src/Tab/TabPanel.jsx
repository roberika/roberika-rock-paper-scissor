import { useEffect, useState } from 'react'

export default function TabPanel({ children, index, selected }) {
    return (
        <div
            id={"panel-" + index}
            role='tabpanel'
            aria-labelledby={"tab-" + index}
            tabIndex="0"
            className={"tab-panel " + (selected == index ? "visible" : "hidden")}>
            {children}
        </div >
    )
}