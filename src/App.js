import { useState } from 'react'

import Board from './containers/Board'

import MainLayout from './ui/layout/MainLayout'
import Home from './ui/views/Home'

const App = () => {
  const [isStarted, setIsStarted] = useState(false)

  return (
    <MainLayout>
      {isStarted ? <Board /> : <Home onClickStart={() => setIsStarted(true)} />}
    </MainLayout>
  )
}

export default App
