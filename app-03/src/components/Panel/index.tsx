

import React from 'react'
import './panel.css'

type PanelProps = {

    title: string
    children: React.ReactNode
}

const Panel = (props: PanelProps) => {
    return (
        
        <div className="panel">
            <h2 className="panel-title">{props.title}</h2>
            
            {props.children}
            
        </div>
        
    )
}
export default Panel