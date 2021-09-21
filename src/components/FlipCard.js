import cardBg from "../images/card-bg.svg"

export default function FlipCard({
    card,
    num,
    onClick,
    className,
}) {
    const handleClick = event => {
        event.preventDefault()
        onClick && onClick()
    }

    return <button
        className={`block shadow bg-white rounded overflow-hidden cursor-pointer select-none hover:scale-110 focus:scale-110 transition-transform ${className}`}
        onClick={handleClick}
    >
        { card.flipped ? <img
            className="block"
            width="100"
            height="100"
            src={card.img}
            alt=""
        /> : <div className="relative">
            <img
                className="block opacity-20"
                width="100"
                height="100"
                src={cardBg}
                alt=""
            />
            <div className="absolute inset-0 flex justify-center items-center text-2xl text-black">
                { num.toString() }
            </div>
        </div> }
    </button>
}
