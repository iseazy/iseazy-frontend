import React, { memo } from 'react';
import { ICard } from '../../models/card';
import Card from '../Card';

interface ListCardProps {
    completedCards: ICard[]
}

const ListCard: React.FC<ListCardProps> = memo(({completedCards}) => {

    return (
        <div className="game-screen__list-card">
            {
                completedCards.map((card, index) => {
                    return (
                        <div key={card.id} className="game-screen__card-wrapper">
                            <Card cardId={card.id} type={card.name} close={card.close} complete={card.complete}/>
                        </div>
                    )
                })
            }
        </div>
    );
});

export default ListCard;