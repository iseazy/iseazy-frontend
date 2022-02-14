import { ReactComponent as Logo } from '../../../assets/icons/logo.svg'
import styles from './welcome.module.css'
import Button from '../../Button/Button'
import { Screen } from '../../../App'

interface IProps {
  startGame: (screen: Screen) => void
}

function Welcome({ startGame }: IProps) {
  const handleStartGame = () => startGame('memory')

  return (
    <div className={styles.content}>
      <Logo className={styles.logo} />
      <h1 className={styles.gameName}>MeMemory</h1>
      <Button onClick={handleStartGame}>Comenzar</Button>
    </div>
  )
}

export default Welcome
