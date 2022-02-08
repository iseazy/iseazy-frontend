import React from 'react'
import Welcome from './components/domain/Welcome/Welcome'
import Memory from './components/domain/Memory/Memory'

function App() {
  const [screen, setScreen] = React.useState('welcome')
  return (
    <>{screen === 'welcome' ? <Welcome startGame={setScreen} /> : <Memory />}</>
  )
}

export default App
