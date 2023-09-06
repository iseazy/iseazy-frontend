import { FC } from "react";
import { Card as CardInterface } from "../../interfaces/card.interface";
import { constants } from "../../../../constants/constants";

interface CardProps {
    card: CardInterface;
    index: number;
    handleClick: () => void;
}
export const Card: FC<CardProps> = ({card, handleClick, index}: CardProps) => {
    return (
        <div className="board__card" onClick={handleClick} role="button" data-testid={`button-${card.id}`}>
            <div className={`card ${card.flipped ? `is-flipped` : ``}`} data-testid={`card-${card.id}`}>
                {
                card.flipped
                    ?
                    <div className="card__front">
                        <img src={`images/${card.content}`} alt={card.id.toString()} className="card__image" loading="lazy"/>
                    </div> 
                    : 
                    <div className="card__back">
                        <span className="card__number">{index+1}</span>
                        <img src="reverse.svg" alt={constants.gameTitle} className="card__image reversed" loading="lazy"/>
                    </div>
                }
            </div>
        </div>
    )
}
