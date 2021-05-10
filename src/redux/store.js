import { createStore } from 'redux'
import reducers from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import getAppInitialState from '../js/getAppInitialState'

const store = createStore(reducers, {...getAppInitialState()}, composeWithDevTools());

export default store;
