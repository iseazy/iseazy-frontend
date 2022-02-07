import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import styles from './welcome.module.css'

function Welcome({ startGame }) {
  const handleStartGame = () => startGame('game')

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Logo className={styles.logo} />
        <h1 className={styles.gameName}>MeMemory</h1>
        <button className={styles.startButton} onClick={handleStartGame}>
          Comenzar
        </button>
      </div>
    </div>
  )
}

export default Welcome
