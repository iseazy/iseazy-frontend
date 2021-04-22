import React, { useCallback, useEffect } from 'react';
import { useTimer } from '../../shared/hooks/useTimer/useTimer';
import GameScreen from '../gameScreen';

const GameContainer = ({ onFinish }) => {
  const [seconds, setOnOff] = useTimer(0);

  useEffect(() => {
    setOnOff(true);
  }, [setOnOff]);

  const handleEndGame = useCallback(() => {
    setOnOff(false);
  }, [setOnOff]);

  return (
    <GameScreen
      onFinish={onFinish}
      onEndGame={handleEndGame}
      timePlaying={seconds}
    />
  );
};

export default GameContainer;
