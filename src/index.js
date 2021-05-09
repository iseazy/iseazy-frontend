import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import MeMemory from './components/MeMemory'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MeMemory />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)