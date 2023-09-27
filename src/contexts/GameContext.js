import React, { useState } from 'react';
import {
  MAX_FLIP_CARDS_SAME_TIME, initialState, flipCard,
  unFlipAllCards, startGame,
  unFlipCards, blockFlippedCards, shuffleCards, resetGame
} from '../models/gameModel';
import { useTimer } from '../hooks/useTimer';

const GameContext = React.createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);
  const { time, startTimer, stopTimer, resetTimer } = useTimer();


  const areFlippedCardsEquals = (state) => {
    const { shuffledImages, flippedCards } = state
    const [firstFlippedCardId, secondFlippedCardId] = flippedCards;

    return (shuffledImages[firstFlippedCardId] === shuffledImages[secondFlippedCardId])
  }

  const checkGameFinished = (state) => {
    return state.lockedCards.size === state.shuffledImages.length;
  };

  const handleCardsMatch = (state) => {
    let updatedState = blockFlippedCards(state);
    setGameState(updatedState);
    return checkGameFinished(updatedState);
  };

  const handleCardsMismatch = (state) => {
    setTimeout(() => {
      const updatedState = unFlipCards(state);
      setGameState(updatedState);
    }, 1000);
    return false;
  };

  const onClickCard = (cardIndex) => {
    const { lockedCards, isBoardLocked, flippedCards } = gameState;

    if (lockedCards.has(cardIndex) || isBoardLocked || flippedCards.includes(cardIndex)) {
      return false;
    }

    const updatedState = flipCard(gameState, cardIndex);
    setGameState(updatedState);

    if (updatedState.flippedCards.length === MAX_FLIP_CARDS_SAME_TIME) {
      if (areFlippedCardsEquals(updatedState)) {
        return handleCardsMatch(updatedState);
      } else {
        return handleCardsMismatch(updatedState);
      }
    }

    return false;
  };

  const onStartGame = (imageList) => {
    startTimer();
    const newGameState = startGame(imageList);
    setGameState(newGameState);
  };

  const onResetGame = () => {
    resetTimer();
    startTimer();

    const resetState = unFlipAllCards(gameState);
    setTimeout(() => {
      const shuffledState = shuffleCards(resetState);
      const newState = resetGame(shuffledState);
      setGameState(newState);
    }, 800);
  };

  const onFinishGame = () => {
    stopTimer();
  };

  return (
    <GameContext.Provider value={{ gameState, onClickCard, onResetGame, onStartGame, time, onFinishGame }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameContext;
