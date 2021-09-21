import { GameIntroIcon } from './game-intro-icon';

export const GameIntro = ({ onClick }) => (
    <div className="game-intro">
        <div className="game-intro__icon">
            <GameIntroIcon />
        </div>
        <h1>MeMemory</h1>
        <button className="game-intro__button" onClick={ onClick }>Comenzar</button>
    </div>
);
