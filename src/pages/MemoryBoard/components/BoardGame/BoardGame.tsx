import { FC } from "react";
import { Card } from ".."
import { Card as CardProps} from "../../interfaces/card.interface";
import { Modal } from '../../../../components';
import { useMemoryGame } from "../../hooks";

export const BoardGame: FC = () => {

    const { cards, isGameOver, handleClick, timer, totalMovements } = useMemoryGame();
    
    return (
        <div className="board__wrap">
            {
                cards && cards.map((card: CardProps, index: number) => (
                    <Card 
                        key={card.id}
                        card={card}
                        index={index}
                        handleClick={()=>handleClick(card)}
                    />
                ))
            }
            { isGameOver && <Modal timer={timer} movements={totalMovements}/> }
        </div>
    )
}
