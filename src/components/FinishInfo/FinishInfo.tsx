import styles from './FinishInfo.module.css'

import { FormatedTime } from '../../usecases/time'
import { Button } from '../Button'

interface FinishInfoProps {
  time: FormatedTime
  restartGame: () => void
}

export function FinishInfo({ time, restartGame }: FinishInfoProps) {
  return (
    <div className={styles.col}>
      <div className={styles.row}>
        <h2 className={styles.title}>¡Completado!</h2>
        <div className={styles.label}>
          <img src='/images/clock.svg' alt='Clock' />
          <p className={styles.time}>{time}</p>
        </div>
      </div>
      <div className={styles.row}>
        <Button onClick={restartGame}>Jugar otra vez</Button>
      </div>
    </div>
  )
}
