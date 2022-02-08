import styles from './restartModal.module.css'
import Button from '../../Button/Button'
import { ReactComponent as Clock } from '../../../assets/icons/clock.svg'

const RestartModal = ({ handleRestart }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h3 className={styles.text}>¡Completado!</h3>
        <Clock className={styles.clock} />
      </div>
      <div className={styles.buttonWrapper}>
        <Button onClick={handleRestart}>Jugar otra vez</Button>
      </div>
    </div>
  )
}

export default RestartModal
