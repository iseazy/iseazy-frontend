import { useState, useEffect } from 'react';
import { LandingPage, Card, PlayAgainModal, Section } from '../../components';
import { CARDS } from '../../consts';
import { shuffleArray, start, end } from '../../helpers';

export function Home() {
  const [cards, setCards] = useState([]);
  const [activeCards, setActiveCards] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showLanding, setShowLanding] = useState(true);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  // Restart game
  useEffect(() => {
    if (showModal === false && showLanding === false) {
      const shuffledCards = shuffleArray(CARDS);
      setCards(shuffledCards);
      setPairs([]);
      setActiveCards([]);
      let startTime = start();
      setStartTime(startTime);
    }
  }, [showModal, showLanding]);

  // Add pairs into array
  useEffect(() => {
    if (activeCards.length === 2) {
      if (activeCards[0].pairId === activeCards[1].pairId) {
        setPairs([...pairs, activeCards[0].pairId]);
      }
      const timer = setTimeout(() => {
        setActiveCards([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeCards]);

  // Show modal when game is finished
  useEffect(() => {
    if (pairs.length === 9) {
      let endTime = end(startTime);
      setEndTime(endTime);
      const timer = setTimeout(() => {
        setShowModal(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [pairs]);

  const handleCardClick = (pairId, cardId) => {
    // Add active card. You can see only 2 cards in time
    if (activeCards.length < 2) {
      setActiveCards([...activeCards, { pairId, cardId }]);
    } else {
      setActiveCards([{ pairId, cardId }]);
    }
  };

  return (
    <div className="flex flex-col md:px-10 flex-row text-gray-100 text-5xl sm:text-7xl h-screen justify-center items-center text-sm font-bold tracking-tight min-w-max w-screen">
      <LandingPage show={showLanding} onClick={() => setShowLanding(false)} />
      <PlayAgainModal showModal={showModal} onClick={() => setShowModal(false)} time={endTime} />
      <Section show={!showLanding}>
        {cards.map((card, index) => (
          <Card
            key={`${card.id}-${index}`}
            rotate={
              pairs.includes(card.id) || activeCards.find((activeCard) => activeCard.cardId === `${card.id}-${index}`)
                ? true
                : false
            }
            img={card.img}
            onClick={() => handleCardClick(card.id, `${card.id}-${index}`)}
          >
            {index + 1}
          </Card>
        ))}
      </Section>
    </div>
  );
}
