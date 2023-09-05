import styles from './timer.module.css'
import { ReactComponent as Clock } from '../../../assets/icons/clock.svg'
import { DateTime } from 'luxon'
import { State } from '../../../domain/hooks/useMemory'

interface Elapsed {
  elapsed: {
    minutes: number
    seconds: number
  }
}

function elapsedTime(start: number, end: number) {
  const { minutes, seconds } = DateTime.fromMillis(end)
    .diff(DateTime.fromMillis(start), ['minutes', 'seconds'])
    .toObject()

  if (minutes === undefined || seconds === undefined) {
    throw new Error(
      'Unexpected undefined minutes or seconds. It should always be a number',
    )
  }

  return {
    minutes,
    seconds,
  }
}

const TextTime = () => <p className={styles.textTime}>Más de una hora</p>
const ElapsedTime = ({ elapsed }: Elapsed) => (
  <p className={styles.time}>
    {elapsed.minutes}:{Math.round(elapsed.seconds).toString().padStart(2, '0')}
  </p>
)

const Timer = ({ time }: { time: State['time'] }) => {
  if (time.start === null || time.end === null) return null
  const elapsed = elapsedTime(time.start, time.end)

  return (
    <div className={styles.wrapper}>
      <Clock className={styles.clock} />
      {elapsed.minutes >= 60 ? <TextTime /> : <ElapsedTime elapsed={elapsed} />}
    </div>
  )
}

export default Timer
