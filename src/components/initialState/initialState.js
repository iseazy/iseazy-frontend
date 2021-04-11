import Button from 'components/button'

import Logo from 'assets/svg/logo.svg'

import styles from './initialState.module.scss'

const InitialState = ({ setGameStart }) => (
  <div className={styles.container}>
    <div className={styles.logo}>
      <Logo />
    </div>
    <h1>MeMemory</h1>
    <Button onClick={setGameStart}>Comenzar</Button>
  </div>
)
export default InitialState
