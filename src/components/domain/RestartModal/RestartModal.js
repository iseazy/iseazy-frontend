import styles from './restartModal.module.css'
import Button from '../../Button/Button'
import Timer from './Timer'

const RestartModal = ({ handleRestart, time }) => {
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
