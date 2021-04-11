import { useContext } from 'react'
import { createPortal } from 'react-dom'

import Button from 'components/button'

import { GameContext } from 'context/game'
import { TimerContext } from 'context/timer'


import Clock from 'assets/svg/clock.svg'

import styles from './modal.module.scss'

const Modal = () => {
  const { timer } = useContext(TimerContext)
  const { isGameFinish, setFinishGame } = useContext(GameContext)
  const actualDate = Date.now()
  const initialDate = new Date(actualDate - timer)
  const minutes = initialDate.getMinutes()
  const seconds = initialDate.getSeconds()
  const time = `${minutes < 10 ? '0' + minutes : minutes}:${
    seconds < 10 ? '0' + seconds : seconds
  }`

  return createPortal(
    isGameFinish && (
      <div className={styles.modal}>
        <div>
          <p>
            <span className={styles.completed}>¡Completado!</span>
            <Clock />
            <span className={styles.time}>{time}</span>
          </p>
          <Button onClick={() => setFinishGame(false)}>Jugar otra vez</Button>
        </div>
      </div>
    ),
    document.getElementById('modal')
  )
}

export default Modal
