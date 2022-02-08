import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'
import styles from './welcome.module.css'
import Button from '../../Button/Button'

function Welcome({ startGame }) {
  const handleStartGame = () => startGame('game')

  return (
    <div className={styles.content}>
      <Logo className={styles.logo} />
      <h1 className={styles.gameName}>MeMemory</h1>
      <Button onClick={handleStartGame}>Comenzar</Button>
    </div>
  )
}

export default Welcome
