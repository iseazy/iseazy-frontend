import { useState } from "react";
import { Card } from "../interfaces/card.interface";

export const useRandomizeCards = (cards: Card[]) => {
    const randomize = (cards: Card[]) => cards.sort(() => Math.random() - 0.5);
    const [randomizedCards, setRandomizedCards] = useState<Card[]>(randomize(cards));
    return [randomizedCards, setRandomizedCards];
}