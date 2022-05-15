import React from "react"

import "./LoadingScreen.css"

export default function LoadingScreen({message}) {
    return (
        <div className={"loading-icon"}>
            <svg viewBox="0 0 24 24" fill="currentColor" height="20%" width="20%">
                <path d="M6 18.7V21a1 1 0 01-2 0v-5a1 1 0 011-1h5a1 1 0 110 2H7.1A7 7 0 0019 12a1 1 0 112 0 9 9 0 01-15 6.7zM18 5.3V3a1 1 0 012 0v5a1 1 0 01-1 1h-5a1 1 0 010-2h2.9A7 7 0 005 12a1 1 0 11-2 0 9 9 0 0115-6.7z"/>
            </svg>
            <h2>{message}</h2>
        </div>
    )
}
LoadingScreen.defaultProps = {
    message: "Loading..."
}