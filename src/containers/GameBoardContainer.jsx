import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import GameContext from '../contexts/GameContext'
import useTheme from '../hooks/useTheme'
import Card from '../components/card/Card'
import styled from 'styled-components';
import Timer from '../components/timer/Timer'
import FinishGameModal from '../components/modal/FinishGameModal';
import { ActionTypesScoreBoard } from '../constants/enums/actionTypesScoreBoard';
import { formatDateTime } from '../utils/utils';
import { ROUTE_HOME } from '../routes/routes';

const GameBoardGrid = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(6, 1fr);
`;

const TimerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 3rem;
`;

const GameBoardContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { onClickCard, time, onFinishGame, onResetGame, gameState: { boardState, shuffledImages, lockedCards, } } = useContext(GameContext)
  const { currentTheme } = useTheme()
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!shuffledImages.length) {
      navigate(`${ROUTE_HOME}`)
    }
  }, [])


  const onCloseModal = () => {
    setModalOpen(false)
    onResetGame()
  }

  const onClickRestartGame = () => {
    onCloseModal()
  }

  const handleFinishGame = () => {
    onFinishGame();
    const newScore = { date: formatDateTime(new Date()), score: time }
    dispatch({ type: ActionTypesScoreBoard.ADD_SCORE, payload: newScore });
    setModalOpen(true);
  }

  const handleCardClick = (cardIndex) => {
    const isGameFinished = onClickCard(cardIndex)
    if (isGameFinished) {
      setTimeout(() => {
        handleFinishGame()
      }, 800)
    }
  }

  return (
    <div>
      <TimerContainer>
        <Timer time={time} currentTheme={currentTheme} />
      </TimerContainer>
      <GameBoardGrid>
        {shuffledImages.map((image, index) => (
          <Card
            key={index}
            flipped={boardState[index]}
            locked={lockedCards.has(index)}
            imageSrc={image}
            number={index + 1}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </GameBoardGrid>
      <FinishGameModal time={time} isModalOpen={isModalOpen} onClose={onCloseModal} onClickButton={onClickRestartGame} />
    </div>
  );
};

export default GameBoardContainer;
