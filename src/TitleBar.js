import React from "react"

import "./TitleBar.css"

const navBtnCls = "nav-btn"

const TitleBar = (props) => {
    return (
        <div className={"header"}>
            <div className={"header-container"}>
                <div className={"title"}>Quixx</div>
                <button className={navBtnCls} onClick={() => props.undo()} disabled={!Boolean(props.state.undoState)}>
                    <img alt="Undo Button" src={process.env.PUBLIC_URL + "/arrow-counterclockwise.svg"}/>
                </button>
                <button className={navBtnCls} onClick={() => props.redo()} disabled={!Boolean(props.state.redoState)}>
                    <img alt="Redo Button" src={process.env.PUBLIC_URL + "/arrow-clockwise.svg"}/>
                </button>
                <button className={navBtnCls} onClick={() => props.restart()}>
                    <img alt="Restart Button" src={process.env.PUBLIC_URL + "/arrow-repeat.svg"}/>
                </button>
                <button className={navBtnCls} onClick={() => props.toggleModal()}>
                    <img alt="Toggle Board" src={process.env.PUBLIC_URL + "/gameboard.svg"}/>
                </button>
                <button className={navBtnCls} onClick={() => props.goFullscreen()}>
                    {
                        props.isFullScreen ?
                            <img alt="Minimize Screen Button" src={process.env.PUBLIC_URL + "/minimize.svg"}/> :
                            <img alt="Full Screen Button" src={process.env.PUBLIC_URL + "/fullscreen.svg"}/>
                    }
                </button>
            </div>
        </div>
    )
}

export default TitleBar