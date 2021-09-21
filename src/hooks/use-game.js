import { useEffect, useReducer } from 'react';
import { GAME_ACTIONS, GAME_UPDATE_DELAY, INITIAL_STATE, REPEATED_CARDS } from '../constants';
import { reducer } from '../reducers';
import { areClickedCardsPaired, isCardClicked, isDeckSolved } from '../utils';

export const useGame = () => {
    const [{ cards, gameState, totalTime }, dispatch ] = useReducer(reducer, INITIAL_STATE);

    const start = () => dispatch({ type: GAME_ACTIONS.START });
    const clickCard = (id) => dispatch({ type: GAME_ACTIONS.CLICK, payload: id});

    useEffect(() => {
        if (!cards.length) {
            return;
        }
        const clickedCards = cards.filter(isCardClicked);

        if (isDeckSolved(cards)) {
            dispatch({ type: GAME_ACTIONS.END });
        } else if (clickedCards.length >= REPEATED_CARDS) {
            const timeoutId = setTimeout(
                () => dispatch({ type: GAME_ACTIONS.UPDATE }),
                areClickedCardsPaired(clickedCards) ? 0 : GAME_UPDATE_DELAY
            );
            
            return () => clearTimeout(timeoutId);
        }
    }, [ cards ]);

    return {
        cards,
        gameState,
        totalTime,
        clickCard,
        start,
    };
};
