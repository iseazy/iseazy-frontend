import { createContext, useState } from 'react'

export const GameContext = createContext()
export const GameProvider = ({ children }) => {
  const [isGameFinish, setFinishGame] = useState(false)
  return (
    <GameContext.Provider value={{ isGameFinish, setFinishGame }}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContext
