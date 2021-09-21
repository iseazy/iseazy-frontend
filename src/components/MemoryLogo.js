import logo from "../images/me-memory-logo.svg"

export default function MemoryLogo() {
    return <div
        className="shadow rounded-full flex items-center justify-center bg-gray"
        style={{ width:"130px", height:"130px" }}
    >
        <img
            src={logo}
            alt="MeMemory Logo"
        />
    </div>
}
