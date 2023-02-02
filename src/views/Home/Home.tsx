import { Button } from '../../components/Button'
import styles from './Home.module.css'

interface HomeProps {
  startGame: () => void
}

export function Home({ startGame }: HomeProps) {
  return (
    <main className={styles.home}>
      <figure className={styles.figure}>
        <img src='/images/logo.svg' alt='MeMemory Game Logo' />
      </figure>
      <h1 className={styles.title}>MeMemory</h1>
      <Button onClick={startGame}>Comenzar</Button>
    </main>
  )
}
