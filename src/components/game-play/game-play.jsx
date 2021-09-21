import { GameCard } from '../game-card';

export const GamePlay = ({ cards, onClick }) => (
    <div className="game-play">
        <div className="game-play__grid">
            { cards.length ? cards.map(({ id, src, flipped }, index) => (
                <GameCard key={ `card-${ id }`}
                    id={ id }
                    src={ src }
                    flipped={ flipped }
                    title={ index + 1 }
                    onClick={ onClick } />
            )) : null }
        </div>
    </div>
);
