import { getFormattedTime } from '../../utils';
import { GameEndIcon } from './game-end-icon';

export const GameEnd = ({ time, onClick }) => (
    <div className="game-end">
            <div className="game-end__popup">
                <div className="game-end__title">
                    <div>¡Completado!</div>
                    <GameEndIcon />
                    <h1>{ getFormattedTime(time) }</h1>
                </div>
            <button className="game-end__button" onClick={ onClick}>Jugar otra vez</button>
        </div>
    </div>
);
