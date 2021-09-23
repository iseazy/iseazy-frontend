import PropTypes from "prop-types"

import "./FlipCard.css"

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
        className={`flip-card ${className}`}
        onClick={handleClick}
    >
        { cookedCard.flipped ? <img
            className="flip-card__image"
            width="100"
            height="100"
            src={cookedCard.img}
            alt=""
        /> : <>
            <img
                className="flip-card__bg-image"
                width="100"
                height="100"
                src={cardBg}
                alt=""
            />
            <div className="flip-card__overlay">
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
