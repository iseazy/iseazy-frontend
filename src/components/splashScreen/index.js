import React from 'react';
import bulb from './../../img/bulb.svg';
import './styles.scss';

const SplashScreen = ({ onClick }) => {
  return (
    <div className="splash-screen" data-testid="splashScreen">
      <div className="splash-screen__logo">
        <img src={bulb} alt="Logo" />
      </div>
      <h1>MeMemory</h1>
      <button value={'Comenzar'} onClick={onClick}>
        Comenzar
      </button>
    </div>
  );
};

export default SplashScreen;
