import { renderHook, act } from '@testing-library/react-hooks';
import { useGame } from '../../../hooks';
import { GAME_STATE } from '../../../constants';

jest.mock('../../../constants', () => ({
    ...jest.requireActual('../../../constants'),
    CARDS_SRC: [ 'sourceA', 'sourceB' ]
}));

describe('useGame()', () => {
    it('should render hook with an initial state', () => {
        const { result } = renderHook(() => useGame());

        expect(result.current).toMatchSnapshot();
    });

    it('should respond to start game event', () => {
        const { result } = renderHook(() => useGame());

        act(() => { 
            result.current.start();
        });

        expect(result.current.cards.length).toBeGreaterThan(0);
    });

    it('should be able to complete the game', async () => {
        const { result , waitForValueToChange, waitForNextUpdate} = renderHook(() => useGame());

        act(() => { result.current.start(); });

        const [a, b] = result.current.cards.filter(({ src }) => src === 'sourceA');
        const [c, d] = result.current.cards.filter(({ src }) => src === 'sourceB');

        act(() => { result.current.clickCard(a.id); });
        act(() => { result.current.clickCard(b.id); });

        await waitForValueToChange(() => { return result.current.cards; });

        act(() => { result.current.clickCard(c.id); });
        act(() => { result.current.clickCard(d.id); });

        await waitForValueToChange(() => { return result.current.cards; });

        expect(result.current.gameState).toBe(GAME_STATE.END);
    });

    it('should be able to fail pairing', async () => {
        const { result , waitForValueToChange, waitForNextUpdate} = renderHook(() => useGame());

        act(() => { result.current.start(); });

        const [a, b] = result.current.cards.filter(({ src }) => src === 'sourceA');
        const [c, d] = result.current.cards.filter(({ src }) => src === 'sourceB');

        act(() => { result.current.clickCard(a.id); });
        act(() => { result.current.clickCard(c.id); });

        await waitForValueToChange(() => { return result.current.cards; });

        expect(result.current.gameState).toBe(GAME_STATE.PLAY);
    });
});
