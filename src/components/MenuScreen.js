import { useDispatch } from "react-redux"

import "./MenuScreen.css"

import { start } from "../store"

import BigButton from "./BigButton"
import MemoryLogo from "./MemoryLogo"

export default function MenuScreen() {
    const dispatch = useDispatch()

    const handleStartClick = (event) => {
        event.preventDefault()
        dispatch(start())
    }

    return <div className="menu-screen">
        <header className="menu-screen__header">
            <MemoryLogo />
            <h1 className="menu-screen__heading">
                MeMemory
            </h1>
            <div className="menu-screen__btn-container">
                <BigButton onClick={handleStartClick}>
                    Comenzar
                </BigButton>
            </div>
        </header>
    </div>
}
