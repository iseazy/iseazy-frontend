import "./Card.css";
import obverseSVG from "./obverse.svg";

export default function Card({ imgSrc, number, onClick, revealed, alt }) {
    return (
        <div 
            role="button" 
            className={`memory-game__card ${revealed ? "memory-game__card--selected" : ""}`}
            style={{ cursor: !revealed ? "pointer" : "default" }}
            onClick={onClick}
        >
            {!revealed &&
                (
                    <>
                        <span className="memory-game__card__number">{number}</span>
                        <img
                            className="memory-game__card__obverse"
                            src={obverseSVG}
                            alt="Tarjeta del anverso" />
                    </>
                )
            }
            {imgSrc &&
                <img
                    className="memory-game__card__image"
                    src={imgSrc}
                    alt={alt ? alt : "Tarjeta del reverso"}
                />
            }
        </div>
    );
}
