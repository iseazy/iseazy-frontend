import { Card } from ".."
import { Modal } from '../../../../components';
import { useMemoryGame } from "../../hooks";
import { Spinner } from "../../../../components/Spinner";

export const BoardGame = () => {

    const { cards, isGameOver, handleClick, timer, totalAttempts } = useMemoryGame();
    
    return (
        <div className="board__wrap">
            {
                cards ? cards.map((card, index) => (
                    <Card 
                        key={card.id}
                        card={card}
                        index={index}
                        handleClick={()=>handleClick(card)}
                    />
                )) :
                <Spinner />
            }
            { isGameOver && <Modal timer={timer} attempts={totalAttempts}/> }
        </div>
    )
}
