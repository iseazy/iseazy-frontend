export default function BigButton({
    children,

    onClick,
}) {
    return <button
        onClick={onClick}
    >
        { children }
    </button>
}
