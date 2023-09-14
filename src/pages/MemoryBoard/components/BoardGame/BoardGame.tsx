import { useEffect, useState } from "react";
import { Card } from ".."
import { Modal } from '../../../../components';
import { Spinner } from "../../../../components/Spinner";
import { Card as CardProps } from "../../interfaces/card.interface";
import { useCards } from "../../hooks";
import { Game } from "../../../../helpers/gameClass";

export const BoardGame = () => {

    const { cardsQuery } = useCards();
    const { startNewGame, handleCardClick, isMatched, gameState } = new Game();
    const [ state, setState ] = useState(gameState);

    useEffect(() => {
        setState(startNewGame(cardsQuery.data || []));
    }, [cardsQuery.data]);

    const handleClick = ( card: CardProps ) => {
        if ( !card.flipped && state.selectedCards.length < 2 ){
            const newState = handleCardClick(state, card)
            setState(newState);
            if ( newState.selectedCards.length === 2 ) {
                setTimeout(() => {
                    setState(isMatched());
                }, 1000);
            }
        }
    }
    
    return (
        <div className="board__wrap">
            {
                state.cards ? state.cards.map((card, index) => (
                    <Card 
                        key={card.id}
                        card={card}
                        index={index}
                        handleClick={()=>handleClick(card)}
                    />
                )) :
                <Spinner />
            }
            { state.isGameOver && <Modal timer={Math.floor((state.endTime - state.startTime) / 1000)} attempts={state.totalAttempts}/> }
        </div>
    )
}
