export default function BigButton({
    children,

    onClick,
}) {
    return <button
        className="text-white bg-pink hover:bg-pink-light focus:bg-pink-light transition-colors text-lg py-4 px-6 rounded-lg"
        onClick={onClick}
    >
        { children }
    </button>
}
