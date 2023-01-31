import { useState } from 'react'

const initializeBoard = () => {
  // array of 18 objects
  return Array(18).fill(null).map((_, i) => {
    // each object has 2 properties
    return {
      id: i,
      value: null
    }
  })
}

export function Game () {
  const [board, setBoard] = useState(initializeBoard)

  return (
      <div className="Game">
        <h1>Game</h1>

        <div className="Game__board">
          {board.map((card) => {
            return (
              <div className="Game__card" key={card.id}>
                {card.id + 1}
              </div>
            )
          })}
          </div>

      </div>
  )
}
