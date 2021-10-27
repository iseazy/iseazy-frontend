import { render } from '@testing-library/react';
import { setCardsMatch, setStart } from '../services/cards.service';
import ListCard from '../components/ListCard';
import { createStore } from 'redux';
import { rootReducer } from '../redux/reducers';
import { Provider } from 'react-redux';
import Home from '../pages/home';
import GameScreen from '../pages/gameScreen';
import StartScreen from '../pages/startScreen';

const store = createStore(rootReducer);

describe("Pages", () => {
    test('Home work as expected', async () => {
        const {container} = render(
            <Provider store={store}>
                <Home />
            </Provider>
        );
        const title = container.querySelector('.start-display__title');
        expect(title).toBeVisible();
    });
    
    test('GameScreen work as expected', async () => {
        const {container} = render(     
            <Provider store={store}>
                <GameScreen />
            </Provider>
        );
        const title = container.querySelector('.game-screen__container');
        expect(title).toBeVisible();
    });

    test('StartScreen work as expected', async () => {
        function handleClick(){};
        const {container} = render(<StartScreen handleClick={handleClick}/>);
        const title = container.querySelector('.start-display__title');
        expect(title).toBeVisible();
    });
})

describe("Game funcionality", () => {
    
    test('Set start with correct number cards', async () => {
        const cards = setStart();
        expect(cards).toHaveLength(18);
    });

    test('Not set math with two diferent cards', async () => {
        const cards = [
            {id: 1, name:"test1", complete: false, close: false},
            {id: 2, name:"test2", complete: false, close: false},
        ];
        const currentFlippedCards = [1, 2]
        const mathCards = setCardsMatch(cards, currentFlippedCards);
        expect(mathCards[0].complete).toEqual(false);
        expect(mathCards[1].complete).toEqual(false);
        expect(mathCards[0].close).toEqual(true);
        expect(mathCards[1].close).toEqual(true);
    });

    test('Set math with two identical cards', async () => {
        const cards = [
            {id: 1, name:"test1", complete: false, close: false},
            {id: 2, name:"test1", complete: false, close: false},
        ];
        const currentFlippedCards = [1, 2]
        const mathCards = setCardsMatch(cards, currentFlippedCards);
        expect(mathCards[0].complete).toEqual(true);
        expect(mathCards[1].complete).toEqual(true);
        expect(mathCards[0].close).toEqual(false);
        expect(mathCards[1].close).toEqual(false);
    });

    test('ListCard render the correctly numbers of cards', async () => {
        const cards = [
            {id: 1, name:"test1", complete: false, close: false},
            {id: 2, name:"test1", complete: false, close: false},
        ];
        const {container} = render(
            <Provider store={store}>
                <ListCard completedCards={cards}/>
            </Provider>
        );
        const totalItems = container.querySelectorAll(".card")
        expect(totalItems).toHaveLength(2);
    });

});