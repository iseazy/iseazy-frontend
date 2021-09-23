import PropTypes from "prop-types"

import cardBg from "../images/card-bg.svg"

export default function FlipCard({
    cookedCard,
    num,
    onClick,
    className,
}) {
    const handleClick = event => {
        event.preventDefault()
        onClick && onClick()
    }

    return <button
        className={`block shadow bg-white rounded overflow-hidden select-none hover:scale-110 focus:scale-110 transition-transform relative ${className}`}
        onClick={handleClick}
    >
        { cookedCard.flipped ? <img
            className="block"
            width="100"
            height="100"
            src={cookedCard.img}
            alt=""
        /> : <>
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
        </> }
    </button>
}

FlipCard.propTypes = {
    cookedCard: PropTypes.shape({
        id: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }).isRequired,
}
