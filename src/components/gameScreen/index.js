import React, { useEffect } from 'react';
import ResultsScreen from '../resultsScreen';
import Card from '../card';

import {
  checkCards,
  shuffleCards,
  useGameContext,
} from '../../api/gameContext';

import {
  KEY_CTXT_ACTIVE_CARDS,
  KEY_CTXT_CARDS,
  KEY_CTXT_GAME_FINISHED,
} from '../../api/gameContext/gameContextKeys';

import './styles.scss';

const GameScreen = ({ onFinish, timePlaying, onEndGame }) => {
  const {
    contextValue: {
      [KEY_CTXT_CARDS]: cards,
      [KEY_CTXT_ACTIVE_CARDS]: active,
      [KEY_CTXT_GAME_FINISHED]: gameSolved,
    },
    dispatch,
  } = useGameContext();

  useEffect(() => {
    shuffleCards(dispatch);
  }, [dispatch]);

  useEffect(() => {
    if (active.length > 1) {
      const checkTimer = setTimeout(() => checkCards(dispatch), 300);
      return () => clearTimeout(checkTimer);
    }
  }, [active, dispatch]);

  useEffect(() => {
    gameSolved && onEndGame();
  }, [gameSolved, onEndGame]);

  return (
    <div data-testid="gameContainer">
      {cards.length > 0 && (
        <>
          <div className="cards-container">
            {cards.map((card, index) => (
              <Card
                key={card.id}
                label={index + 1}
                id={card.id}
                category={card.category}
                img={card.img}
                active={card.active}
                solved={card.solved}
              />
            ))}
          </div>
          {gameSolved && (
            <ResultsScreen timePlaying={timePlaying} onClick={onFinish} />
          )}
        </>
      )}
    </div>
  );
};

export default GameScreen;
