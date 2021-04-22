import React, { createContext, useContext, useReducer } from 'react';
import _ from 'lodash';
import {
  shuffleItems,
  findItemById,
  updateItemByIndex,
  updateItemsByIndex,
} from '../../utils/arrayUtils';

import {
  KEY_CTXT_ALLOWED,
  KEY_CTXT_FOUND_CARDS,
  KEY_CTXT_GAME_FINISHED,
} from './gameContextKeys';
import { KEY_CTXT_ACTIVE_CARDS } from './gameContextKeys';
import { KEY_CTXT_CARDS } from './gameContextKeys';
import { initialCards } from './gameContextData';

const initialContext = {
  [KEY_CTXT_CARDS]: initialCards,
  [KEY_CTXT_ACTIVE_CARDS]: [],
  [KEY_CTXT_FOUND_CARDS]: 0,
  [KEY_CTXT_ALLOWED]: true,
  [KEY_CTXT_GAME_FINISHED]: false,
};

export const GameContext = createContext(initialContext);

const GameContextReducer = (state, action) => {
  switch (action.type) {
    case 'SHUFFLE':
      const restoredCards = state[KEY_CTXT_CARDS].map((card) => {
        return {
          ...card,
          active: false,
          solved: false,
        };
      });

      return {
        ...initialContext,
        [KEY_CTXT_CARDS]: shuffleItems(restoredCards),
      };

    case 'SELECT': {
      const currentCards = state[KEY_CTXT_CARDS];
      const selectedCard = findItemById(currentCards, action.payload.id);
      const updatedCurrentActive = {
        id: action.payload.id,
        category: selectedCard.category,
      };

      const updatedCards = updateItemByIndex(currentCards, action.payload.id, {
        active: true,
      });

      return {
        ...state,
        [KEY_CTXT_CARDS]: updatedCards,
        [KEY_CTXT_ACTIVE_CARDS]: [
          ...state[KEY_CTXT_ACTIVE_CARDS],
          updatedCurrentActive,
        ],
        [KEY_CTXT_ALLOWED]:
          state[KEY_CTXT_ACTIVE_CARDS].length < 1 ? true : false,
      };
    }

    case 'CHECK_CARDS': {
      const currentCards = state[KEY_CTXT_CARDS];
      const currentActiveCards = state[KEY_CTXT_ACTIVE_CARDS];
      const match =
        currentActiveCards[0].category === currentActiveCards[1].category;

      let updatedState;

      if (match) {
        updatedState = {
          [KEY_CTXT_CARDS]: updateItemsByIndex(
            currentCards,
            [currentActiveCards[0].id, currentActiveCards[1].id],
            {
              active: false,
              solved: true,
            },
          ),
          [KEY_CTXT_ACTIVE_CARDS]: [],
          [KEY_CTXT_FOUND_CARDS]: state[KEY_CTXT_FOUND_CARDS] + 1,
          [KEY_CTXT_ALLOWED]: true,
          [KEY_CTXT_GAME_FINISHED]:
            state[KEY_CTXT_FOUND_CARDS] + 1 ===
            state[KEY_CTXT_CARDS].length / 2,
        };
      } else {
        updatedState = {
          [KEY_CTXT_CARDS]: updateItemsByIndex(
            currentCards,
            [currentActiveCards[0].id, currentActiveCards[1].id],
            {
              active: false,
            },
          ),
          [KEY_CTXT_ACTIVE_CARDS]: [],
          [KEY_CTXT_FOUND_CARDS]: state[KEY_CTXT_FOUND_CARDS],
          [KEY_CTXT_ALLOWED]: true,
          [KEY_CTXT_GAME_FINISHED]: false,
        };
      }

      return {
        ...state,
        ...updatedState,
      };
    }

    default: {
      return state;
    }
  }
};

export const GameContextProvider = ({
  children,
  initialData = initialContext,
}) => {
  const [contextValue, dispatch] = useReducer(GameContextReducer, initialData);

  return (
    <GameContext.Provider value={{ contextValue, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('Cannot use Data Context');
  }

  return context;
};

const shuffleCards = (dispatchfunction) => {
  dispatchfunction({
    type: 'SHUFFLE',
  });
};

const clickCard = (dispatchfunction, id) => {
  dispatchfunction({
    type: 'SELECT',
    payload: { id },
  });
};

const selectCard = _.throttle(clickCard, 300);

const checkCards = (dispatchfunction) => {
  dispatchfunction({
    type: 'CHECK_CARDS',
  });
};

export { shuffleCards, selectCard, checkCards };
