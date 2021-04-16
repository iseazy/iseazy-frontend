
import { createContext, useReducer, useRef, Dispatch } from 'react'
import { generatorIds } from '../core/helpers/generatorIds';
import { updateFlippedCardsArray } from '../core/helpers/reducers';
import shuffledArray from '../core/helpers/shuffleArray';

export interface Card {
    id: string;
    index: number;
}

type State = {
    hasWon: Boolean;
    time: number;
    gameStarted: Boolean;
    cards: Card[];
    flipped: Card[];
}

const generateCards = () => {
    const emptyArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9];
    const filledArray = emptyArray.reduce<Card[]>((acc,item) => [...acc,{
        id: generatorIds(),
        index: item
    }],[])
    return filledArray;
}

export const initialValues: State = {
    hasWon: false,
    gameStarted: false,
    time: 0,
    cards: generateCards(),
    flipped: [],
}


const AppContext = createContext<{ state: State; dispatch: Dispatch<Actions>; }>({ state: initialValues, dispatch: () => null });

type Actions =
    | { type: 'start'; }
    | { type: 'won' }
    | { type: 'restart'}
    | {type: 'setTime', value:number}
    | { type: 'flip', value: Card}

const reducer = (state: State, action: Actions): State => {
    
    /*      
        if ('value' in action) console.log("action value:", action.value)
        console.log("state", state)
    */

    switch (action.type) {
        case 'start':
            return {
                ...state,
                gameStarted: true,
                cards: shuffledArray(initialValues.cards)
            }
        case 'won':
            return {
                ...state,
                hasWon: true,
            }
        case 'flip': 
            return { 
                ...state,
                flipped: updateFlippedCardsArray(state.flipped,action.value)
            }
        case 'setTime':
            return {
                ...state,
                time: action.value
            }
        case 'restart':
            return {
                ...initialValues,
                cards: shuffledArray(initialValues.cards)
            }
        default:
            return state
    }
}


export const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialValues)

    return <AppContext.Provider
        value={{ state, dispatch }}>
        {children}
    </AppContext.Provider>
}


export default AppContext;