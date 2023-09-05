import styles from './restartModal.module.css'
import Button from '../../Button/Button'
import Timer from './Timer'
import { State } from '../../../domain/hooks/useMemory'

interface IProps {
  time: State['time']
  handleRestart: () => void
}

const RestartModal = ({ handleRestart, time }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3 className={styles.text}>¡Completado!</h3>
        <Timer time={time} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleRestart}>Jugar otra vez</Button>
      </div>
    </div>
  )
}

export default RestartModal
