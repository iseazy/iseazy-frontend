import "./MemoryLogo.css"

import logo from "../images/me-memory-logo.svg"

export default function MemoryLogo() {
    return <div className="memory-logo">
        <img
            src={logo}
            alt="MeMemory Logo"
        />
    </div>
}
