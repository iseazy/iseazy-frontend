import logo from "../images/me-memory-logo.svg"
import BigButton from "./BigButton"

export default function MenuScreen({
    onStart
}) {
    const handleStartClick = (event) => {
        event.preventDefault()
        onStart()
    }

    return <div>
        <header>
            <img
                src={logo}
                alt="logo"
            />
            <h1>
                MeMemory
            </h1>
            <div>
                <BigButton
                    onClick={handleStartClick}
                >
                    Comenzar
                </BigButton>
            </div>
        </header>
    </div>
}
