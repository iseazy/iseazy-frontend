import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { CardInfo, cards as cardsConfig } from '../../config/cards';
import { shuffle } from '../../utils/shuffle';
import useInterval from '../../hooks/useInterval';
import Modal from '../../components/Modal/Modal';
import clock from '../../assets/clock.svg';
import { parseTime } from '../../utils/time';
import { getScores, saveScore } from '../../utils/localStorage';

function Game() {
  const [ cards, setCards ] = useState(shuffle(cardsConfig));
  const [ firstChoice, setFirstChoice ] = useState<CardInfo | null>(null);
  const [ secondChoice, setSecondChoice ] = useState<CardInfo | null>(null);
  const [ timer, setTimer ] = useState(0);
  const [ isPlaying, setIsPlaying ] = useState(true);

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

  const resetGame = () => {
    setTimer(0);
    setIsPlaying(true);
    setCards(shuffle(cardsConfig));
  }

  useEffect(() => {
    if (cards.every(card => card.match)) {
      setIsPlaying(false);
      saveScore(timer);
    }
  }, [cards, timer]);

  const scores = getScores();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="text-center my-4">
        <p className="text-6xl flex items-center">
          <img src={clock} alt="Clock icon" className="mr-3" />
          {parseTime(timer)}
        </p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-cards md:w-[750px] mb-4">
        {cards.map((card, i) => (
          <Card
            key={card.id} position={i + 1} img={card.img}
            handleChoice={() => handleChoice(card)}
            showImage={handleShowImage(card)}
            disabled={card.match || !!(firstChoice && secondChoice)}
          />
        ))}
      </div>
      {!isPlaying && (
        <Modal
          content={
            <>
              <div className="flex justify-between items-center">
                <p className="text-3xl">¡Completado!</p>
                <p className="text-6xl flex items-center">
                  <img src={clock} alt="Clock icon" className="mr-3" />
                  {parseTime(timer)}
                </p>
              </div>
              {scores && (
                <>
                  <p className="text-xl text-iseazy mb-2">Your best results</p>
                  <div className="flex flex-col">
                    {scores.map(score => (
                      <p className="flex text-base items-center ml-4">
                        <img src={clock} alt="Clock icon" className="mr-3 h-4" />
                        {parseTime(score)}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </>
          }
          action={resetGame}
          actionText="Jugar otra vez"
        />
      )}
    </div>
  )
}

export default Game;
