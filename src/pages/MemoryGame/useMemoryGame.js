import { useState } from 'react';

export default function useMemoryGame(cards) {
    const [selectedCards, setSelectedCards] = useState([]);

    const handleMismatch = (firstCard, secondCard) => {
        setTimeout(() => {
            firstCard.revealed = false;
            secondCard.revealed = false;
            setSelectedCards([]);
        }, 1000);
    };

    return { selectedCards, handleMismatch, setSelectedCards };
}
