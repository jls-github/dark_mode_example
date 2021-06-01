import React from 'react'

export default function AppWrapper({children, theme}) {
    return (
        <div className={`app bg-primary-${theme}`}>
            {children}
        </div>
    )
}
