import { useEffect, useState } from "react";
import { Card } from "../interfaces/card.interface";
import { useChronometer } from ".";

export const useMatches = (cards: Card[]) => {
    const [selectedCards, setSelectedCards] = useState<Card[]>([]);
    const [totalAttempts, setTotalAttempts] = useState<number>(0);
    const {timer, setStopTimer} = useChronometer();
    const [isGameOver, setIsGameOver] = useState<boolean>(false);
    useEffect(() => {
        if ( selectedCards.length === 2 ) {
            setTotalAttempts(totalAttempts+1);
            if ( selectedCards[0].cardPairID === selectedCards[1].cardPairID ) {
                selectedCards[0].revealed = true;
                selectedCards[1].revealed = true;
                if ( cards.filter(card => !card.revealed).length === 0 ) {
                    setStopTimer(true);
                    setIsGameOver(true);
                }
                setSelectedCards([]);
            } else {
                setTimeout(() => {
                    selectedCards[0].flipped = false;
                    selectedCards[1].flipped = false;
                    setSelectedCards([]);
                }, 1000);
            }
        }
    }, [selectedCards])

    return {
        selectedCards, setSelectedCards, timer, isGameOver, totalAttempts

    }
}