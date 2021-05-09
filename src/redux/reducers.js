import { combineReducers } from 'redux'
import { currentPage } from './reducers/currentPage'
import { startGameTime } from './reducers/startGameTime'
import { cards } from './reducers/cards'
import { matches } from './reducers/matches'
import { firstCard } from './reducers/firstCard'
import { secondCard } from './reducers/secondCard'

const reducers = combineReducers({
    currentPage,
    cards,
    startGameTime,
    firstCard,
    secondCard,
    matches
})

export default reducers