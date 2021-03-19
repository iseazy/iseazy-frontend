import { useState, useEffect } from 'react';
import { LandingPage, Card } from '../../components';
import { CARDS } from '../../consts';
import { shuffleArray } from '../../helpers';

export function Home() {
  const [cards, setCards] = useState([]);
  const [activeCards, setActiveCards] = useState([]);
  const [pairs, setPairs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const shuffledCards = shuffleArray(CARDS);
    setCards(shuffledCards);
  }, []);

  useEffect(() => {
    if (activeCards.length === 2) {
      if (activeCards[0].item === activeCards[1].item) {
        setPairs([...pairs, activeCards[0].item]);
      }
      const timer = setTimeout(() => {
        setActiveCards([]);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [activeCards]);

  const handleClick = (item, index) => {
    if (activeCards.length < 2) {
      setActiveCards([...activeCards, { item, id: `${item}-${index}` }]);
    } else {
      setActiveCards([{ item, id: `${item}-${index}` }]);
    }
  };

  return (
    <div className="flex flex-col md:px-10 flex-row text-gray-100 text-5xl sm:text-7xl h-screen justify-center items-center text-sm font-bold tracking-tight min-w-max w-screen">
      {/* <LandingPage /> */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-7.5 p-4">
        {cards.map((item, index) => (
          <Card
            key={`${item}-${index}`}
            rotate={pairs.includes(item) || activeCards.find((card) => card.id === `${item}-${index}`) ? true : false}
            imgId={item}
            onClick={() => handleClick(item, index)}
          >
            {index + 1}
          </Card>
        ))}
      </div>
    </div>
  );
}
