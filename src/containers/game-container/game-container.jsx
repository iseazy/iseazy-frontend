import { GameEnd } from '../../components/game-end';
import { GameIntro } from '../../components/game-intro';
import { GamePlay } from '../../components/game-play';
import { useGame } from '../../hooks';
import { isGameEnd, isGameIdle } from '../../utils';

export const GameContainer = () => {
    const game = useGame();

    return (
        <div className="game-container">
            { isGameIdle(game)
                ? <GameIntro onClick={ game.start } />
                : <GamePlay cards={ game.cards } onClick={ game.clickCard } /> }
            { isGameEnd(game)
                ? <GameEnd time={ game.totalTime } onClick={ game.start } />
                : null }
        </div>
    );
};
