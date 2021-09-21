import { render } from '@testing-library/react';
import { GamePlay } from '../../../components/game-play/game-play';

jest.mock('../../../components/game-card/game-card', () => ({
    GameCard: ({ onClick, ...props }) => `card with props [${Object.entries(props).map(([a,b]) => `${ a }=${ b }`).join(';')}]\n`
}));

describe('<GamePlay />', () => {    
    it('should render component with cards', () => {
        const testProps = {
            cards: mockDeck,
            onClick: () => {}
        }
        const { asFragment } = render(<GamePlay { ...testProps }/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should render component without cards', () => {
        const testProps = {
            cards: [],
            onClick: () => {}
        }
        const { asFragment } = render(<GamePlay { ...testProps }/>);
        expect(asFragment()).toMatchSnapshot();
    });
});