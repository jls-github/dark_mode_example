import React from 'react'
import 'Styles/Home/HomeContentBox.css'

export default function HomeContentBox({text, theme}) {
    return (
        <div className={`content-box bg-primary-${theme}`}>
            <p className={`text-primary-${theme}`}>{text}</p>
        </div>
    )
}
