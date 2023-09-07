import { useCallback, useState, useEffect } from 'react';
import { Card } from "../interfaces/card.interface";
import { useCards, useMatches } from ".";

export const useMemoryGame = () => {
    const { cardsQuery } = useCards();
    const [cards, setCards] = useState<Card[]>([]);
    const {selectedCards, setSelectedCards, timer, isGameOver, totalAttempts} = useMatches(cards);
    
    useEffect(() => {
        setCards(cardsQuery.data || []);
    }, [cardsQuery.data]);

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
        totalAttempts
    }
}