import { useCallback, useState } from "react";
import { randomizeCards } from "../helpers/getRandomizeCards";
import { Card } from "../interfaces/card.interface";
import { useMatches } from ".";

export const useMemoryGame = () => {
    const [cards, setCards] = useState<Card[]>(randomizeCards());
    const {selectedCards, setSelectedCards, timer, isGameOver, totalMovements} = useMatches(cards)

    const handleClick = useCallback((card: Card) => {
        if ( selectedCards.length === 2 ) return;
        card.flipped = true;
        setCards([...cards]);
        setSelectedCards([...selectedCards, card]);
    }, [cards, selectedCards]);

    return {
        cards,
        handleClick,
        isGameOver,
        timer,
        totalMovements
    }
}