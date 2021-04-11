import React from 'react'
import ReactDOM from 'react-dom'

import { GameProvider } from 'context/game'
import { TimerProvider } from 'context/timer'

import App from './app'
import reportWebVitals from './config/reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <TimerProvider>
        <App />
      </TimerProvider>
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
