import React, { useState } from 'react';
import Card from '../Card';

export default function Board(props) {
    const {cards} = props;
    const [flippedCards, setFlippedCards] = useState({});
    const [activeCard, setActiveCard] = useState();
    const onFlip = (id, copyId) => {
        console.log(id, copyId);
        setFlippedCards({...flippedCards, [id]: true});
        if(activeCard && activeCard.copyId !== copyId)  {
            const newFlippedCards = {...flippedCards};
            delete newFlippedCards[activeCard.id];
            delete newFlippedCards[id];
            setTimeout(() => {
                setFlippedCards(newFlippedCards);
            },1000);
        }
        setActiveCard(activeCard ? null : {id, copyId});

        // CHECK IF THE GAME IS OVER
    }
    return (
        <div className="board">
            {cards.map(({image, id, copyId}, index) => <Card key={id} index={index} image={image} isFlipped={flippedCards[id]} flip={() => onFlip(id, copyId)}></Card>)}
        </div>
    )
}
