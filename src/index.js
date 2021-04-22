import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/layout';
import { GameContextProvider } from './api/gameContext';
import './theme/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <GameContextProvider>
      <Layout />
    </GameContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
