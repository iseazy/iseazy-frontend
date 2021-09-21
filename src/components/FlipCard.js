import "./FlipCard.css"
import cardBg from "../images/card-bg.svg"

export default function FlipCard({
    card,
    num,
    onClick
}) {
    return <div
        className="flip-card shadow"
        style={{overflow:"hidden"}}
        onClick={onClick}
    >
        { card.flipped ? <img
            src={card.img}
            alt=""
        /> : <div style={{position:"relative"}}>
            <img style={{ position:"absolute", opacity: 0.2 }} src={cardBg} alt="" />
            { num.toString() }
        </div> }
    </div>
}
