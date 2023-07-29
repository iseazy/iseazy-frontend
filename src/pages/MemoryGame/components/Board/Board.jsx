import './Board.css';
import Card from '../Card/Card';

export default function Board({cards, onCardClicked}) { 
    return (
        <div className='memory-game__board'>
            {cards.map((card, index) => 
                <Card 
                    key={`${card.imgSrc}-${index}`} 
                    number={index + 1} 
                    imgSrc={card.imgSrc} 
                    revealed={card.revealed} 
                    onClick={() => onCardClicked(card)} 
                />
            )}
        </div>
    );
}