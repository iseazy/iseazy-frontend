import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListCard from '../../components/ListCard';
import { finishGame, solvedMatch } from '../../redux/actions/gameActions';
import { RootState } from '../../redux/reducers';
import { calcTotalTime } from '../../services/cards.service';

interface GameScreenProps {}

const GameScreen: React.FC<GameScreenProps> = memo(() => {
    const dispatch = useDispatch()
    
    const {cards, completedCards, flippedCards, startGameDate } = useSelector((state: RootState) => {
        return {
            cards: [...state.gameReducer.cards], 
            completedCards: [...state.gameReducer.completedCards], 
            flippedCards: [...state.gameReducer.flippedCards],
            startGameDate: state.gameReducer.startGameDate
        }
    })

    useEffect(() => {
        if(flippedCards.length === 2) {
            setTimeout(() => {
                dispatch(solvedMatch());
            }, 500);
        }

        if(cards.length === (completedCards.length + flippedCards.length)){
            const formatDate = calcTotalTime(startGameDate);
            dispatch(finishGame(formatDate));
        }
    }, [cards.length, completedCards.length, flippedCards.length, dispatch, startGameDate]);

    return (
        <div className="game-screen__container">
            <ListCard completedCards={cards}/>
        </div>
    );
});

export default GameScreen;