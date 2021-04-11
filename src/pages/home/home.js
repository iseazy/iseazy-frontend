import { useContext } from 'react'


import Game from 'components/game'
import InitialState from 'components/initialState'
import Modal from 'components/modal'

import { TimerContext } from 'context/timer'

const home = () => {
  const { timer, setTimer } = useContext(TimerContext)

  if (timer) {
    return (
      <>
        <Modal />
        <Game />
      </>
    )
  }
  return <InitialState setGameStart={() => setTimer(new Date())} />
}

export default home
