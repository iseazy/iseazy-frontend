import styles from './timer.module.css'
import { ReactComponent as Clock } from '../../../assets/icons/clock.svg'
import { DateTime } from 'luxon'

function elapsedTime(start, end) {
  const { minutes, seconds } = DateTime.fromMillis(
    end,
  ).diff(DateTime.fromMillis(start), ['minutes', 'seconds']).values
  return {
    minutes,
    seconds,
  }
}

const TextTime = () => <p className={styles.textTime}>Más de una hora</p>
const ElapsedTime = ({ elapsed }) => (
  <p className={styles.time}>
    {elapsed.minutes}:{Math.round(elapsed.seconds).toString().padStart(2, '0')}
  </p>
)

const Timer = ({ time }) => {
  const elapsed = elapsedTime(time.start, time.end)

  return (
    <div className={styles.wrapper}>
      <Clock className={styles.clock} />
      {elapsed.minutes >= 60 ? <TextTime /> : <ElapsedTime elapsed={elapsed} />}
    </div>
  )
}

export default Timer
