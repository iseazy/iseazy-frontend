import { createContext, useState } from 'react'

export const TimerContext = createContext()
export const TimerProvider = ({ children }) => {
  const [timer, setTimer] = useState()
  return (
    <TimerContext.Provider value={{ timer, setTimer }}>
      {children}
    </TimerContext.Provider>
  )
}

export default TimerContext
