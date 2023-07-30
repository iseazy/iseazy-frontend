import { useState, useEffect } from 'react';

export default function useShuffle(initialCards) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const shuffledCards = [...initialCards].sort(() => Math.random() - 0.5);
    setCards(shuffledCards);
  }, [initialCards]);

  return [cards, setCards];
}
