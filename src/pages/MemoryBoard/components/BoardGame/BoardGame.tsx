import { FC, useCallback, useState } from "react";

import { Card } from ".."
import { Card as CardProps} from "../../interfaces/card.interface";
import { randomizeCards } from "../../helpers/getRandomizeCards";

export const BoardGame: FC = () => {

    const [cards, setCards] = useState<CardProps[]>(randomizeCards());
    const [selectedCards, setSelectedCards] = useState<CardProps[]>([]);

    const handleClick = useCallback((card: CardProps) => {
        //if ( selectedCards.length === 2 ) return;
        card.flipped = !card.flipped;
        setCards([...cards]);
        setSelectedCards([...selectedCards, card]);
    }, [cards, selectedCards]);

    return (
        <div className="board__wrap">
            {
                cards && cards.map((card: CardProps, index: number) => (
                    <Card 
                        key={card.id}
                        card={card}
                        index={index}
                        handleClick={()=>handleClick(card)}
                    />
                ))
            }
        </div>
    )
}
