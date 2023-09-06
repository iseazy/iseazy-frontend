import { FC } from "react";
import { Card } from ".."
import { Card as CardProps} from "../../interfaces/card.interface";
import { Modal } from '../../../../components';
import { useMemoryGame } from "../../hooks";
import { Spinner } from "../../../../components/Spinner";

export const BoardGame: FC = () => {

    const { cards, isGameOver, handleClick, timer, totalAttempts } = useMemoryGame();
    
    return (
        <div className="board__wrap">
            {
                cards ? cards.map((card: CardProps, index: number) => (
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
