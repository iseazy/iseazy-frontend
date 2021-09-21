import { render } from '@testing-library/react';
import { GameContainer } from '../../../containers/game-container';
import { isGameEnd, isGameIdle } from '../../../utils';
import { useGame } from '../../../hooks';

jest.mock('../../../components/game-intro', () => ({
    GameIntro: () => 'GameIntro'
}));
jest.mock('../../../components/game-play', () => ({
    GamePlay: () => 'GamePlay'
}));
jest.mock('../../../components/game-end', () => ({
    GameEnd: () => 'GameEnd'
}));
jest.mock('../../../utils', () => ({
    isGameEnd: jest.fn(),
    isGameIdle: jest.fn()
}));
jest.mock('../../../hooks', () => ({
    useGame: jest.fn()
}));

describe('<GameContainer />', () => {
    beforeEach(() => {
        isGameEnd.mockReturnValue(false);
        isGameIdle.mockReturnValue(false);
        useGame.mockReturnValue({
            cards: [],
            totalTime: 123,
            start: jest.fn(),
            clickCard: jest.fn()
        });
    });

    it('should render game play screen', () => {
        const { asFragment } = render (<GameContainer />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render game intro screen', () => {
        isGameIdle.mockReturnValueOnce(true);
        const { asFragment } = render(<GameContainer />);

        expect(asFragment()).toMatchSnapshot();
    });

    it('should render game end screen in top of game play screen', () => {
        isGameEnd.mockReturnValueOnce(true);
        const { asFragment } = render(<GameContainer />);

        expect(asFragment()).toMatchSnapshot();
    });
});
