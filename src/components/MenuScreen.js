import BigButton from "./BigButton"
import MemoryLogo from "./MemoryLogo"

export default function MenuScreen({ onStart }) {
    const handleStartClick = (event) => {
        event.preventDefault()
        onStart()
    }

    return <div className="min-h-screen bg-gradient flex items-center justify-center">
        <header className="flex flex-col items-center">
            <MemoryLogo />
            <h1 className="mt-3 text-4xl text-black">
                MeMemory
            </h1>
            <div className="mt-7">
                <BigButton onClick={handleStartClick}>
                    Comenzar
                </BigButton>
            </div>
        </header>
    </div>
}
