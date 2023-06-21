import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { CardInfo, cards as cardsConfig } from '../../config/cards';
import { shuffle } from '../../utils/shuffle';
import useInterval from '../../hooks/useInterval';

interface GameProps {
  nextStep: () => void;
}

function Game({ nextStep }: GameProps) {
  const [ cards, setCards ] = useState(shuffle(cardsConfig));
  const [ firstChoice, setFirstChoice ] = useState<CardInfo | null>(null);
  const [ secondChoice, setSecondChoice ] = useState<CardInfo | null>(null);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useInterval(() => setTimer(prev => prev + 1), isPlaying ? 1000 : null);

  const compareCards = (firstCard: CardInfo, secondCard: CardInfo): boolean => {
    if (firstCard.cardId === secondCard.cardId) {
      setCards(prevValue => {
        const newCards = [...prevValue];
        const firstCardIndex = newCards.findIndex(card => card.id === firstCard.id);
        newCards[firstCardIndex] = { ...firstCard, match: true };
        const secondCardIndex = newCards.findIndex(card => card.id === secondCard.id);
        newCards[secondCardIndex] = { ...secondCard, match: true };

        return newCards;
      });

      return true
    }
    return false;
  }

  const handleChoice = (card: CardInfo) => {
    if (!firstChoice) {
      setFirstChoice(card);
    } else if(!secondChoice) {
      setSecondChoice(card);

      const match = compareCards(firstChoice, card);
      if (match) {
        setFirstChoice(null);
        setSecondChoice(null);
      } else {
        setTimeout(() => {
          setFirstChoice(null);
          setSecondChoice(null);
        }, 1000);
      }
    }
  }

  const handleShowImage = (card: CardInfo) => {
    return card.match || firstChoice?.id === card.id || secondChoice?.id === card.id
  }

  useEffect(() => {
    if (cards.every(card => card.match)) {
      setIsPlaying(false);
    }
  }, [cards])

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-cards md:w-[750px]">
        {cards.map((card, i) => (
          <Card
            key={card.id} position={i + 1} img={card.img}
            handleChoice={() => handleChoice(card)}
            showImage={handleShowImage(card)}
            disabled={card.match || !!(firstChoice && secondChoice)}
          />
        ))}
      </div>
    </div>
  )
}

export default Game;
