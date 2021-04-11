import { useState } from 'react'

import Game from 'components/game'
import InitialState from 'components/initialState'

import styles from './home.module.scss'

const home = () => {
  const [gameStart, setGameStart] = useState(true)

  return (
    <div className={styles.home}>
      {gameStart ? (
        <Game />
      ) : (
        <InitialState setGameStart={() => setGameStart(true)} />
      )}
    </div>
  )
}

export default home
