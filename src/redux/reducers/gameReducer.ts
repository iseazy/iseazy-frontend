import { AnyAction } from "redux";
import { ICard } from "../../models/card";
import { FINISHGAME, FLIPPEDCARD, SOLVEDMATCH, STARTGAME } from "../../models/constants";
import { setCardsMatch, setStart } from "../../services/cards.service";

const initialState = {
  isRunning: false,
  isFinished: false,
  startGameDate: new Date(),
  totalGameDate: "",
  cards: [] as ICard[],
  flippedCards: [] as number[],
  completedCards: [] as ICard[]
};

const gameReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case STARTGAME:
        const currentState = {...state};
        currentState.cards = setStart();
        currentState.completedCards = [];
        currentState.flippedCards = [];
      return {
        ...currentState,
        startGameDate: new Date(),
        isFinished: false,
        isRunning: true
      };
    case FINISHGAME:
        const allCards = [...state.cards]
        const currentFlipedCards = [...state.flippedCards];
        const cardsFinish = setCardsMatch(allCards, currentFlipedCards, true);
        return {
            ...state,
            ...cardsFinish,
            totalGameDate: action.formatDate,
            isFinished: true
        };
    case FLIPPEDCARD:
        let currentCardFlipped = {} as ICard;
        if(state.flippedCards.length < 2 && !state.flippedCards.includes(action.cardID)){
            const id2Math = action.cardID;
            currentCardFlipped = [...state.cards].find((card: ICard) => card.id === id2Math) || {} as ICard;
            currentCardFlipped.close = false;
            state.flippedCards = [...state.flippedCards, id2Math]
        }
        return {
            ...state,
            ...currentCardFlipped
        };
    case SOLVEDMATCH:
        const cards = setCardsMatch([...state.cards], [...state.flippedCards]);
        state.completedCards = [...state.completedCards, ...cards.filter(card => card.complete)];
        state.flippedCards = [];
        return {
            ...state,
            ...cards
        }
    default:
      return state;
  }
};

export default gameReducer;