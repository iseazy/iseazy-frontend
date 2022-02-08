import React from 'react'
import Welcome from './components/domain/Welcome/Welcome'
import Game from './components/domain/Game/Game'

function App() {
  const [screen, setScreen] = React.useState('welcome')
  return (
    <>{screen === 'welcome' ? <Welcome startGame={setScreen} /> : <Game />}</>
  )
}

export default App
