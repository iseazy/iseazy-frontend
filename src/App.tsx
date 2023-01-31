import { useState } from 'react'
import { Game } from './views/Game'
import { Home } from './views/Home'

function App () {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const startGame = () => setIsGameStarted(true)

  return (
    isGameStarted ? <Game/> : <Home startGame={startGame}/>
  )
}

export default App
