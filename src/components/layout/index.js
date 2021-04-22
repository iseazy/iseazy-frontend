import React, { useState } from 'react';
import GameContainer from '../gameContainer';

import SplashScreen from '../splashScreen';
import './styles.scss';

const Layout = ({ initialState = 'SPLASH_SCREEN' }) => {
  const [appState, setAppState] = useState(initialState);
  const gotoSplash = () => setAppState('SPLASH_SCREEN');
  const gotoGame = () => setAppState('GAME_SCREEN');

  const screens = {
    SPLASH_SCREEN: <SplashScreen onClick={gotoGame} />,
    GAME_SCREEN: <GameContainer onFinish={gotoSplash} />,
    default: <SplashScreen onClick={gotoGame} />,
  };

  return (
    <div className="layout">
      <div className="layout__content">{screens[appState]}</div>
    </div>
  );
};

export default Layout;
