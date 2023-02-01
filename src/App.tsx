import { useState } from 'react'
import { GameView } from './views/Game'
import { Home } from './views/Home'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const startGame = () => setIsGameStarted(true)

  return isGameStarted ? <GameView /> : <Home startGame={startGame} />
}

export default App
