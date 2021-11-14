import cardGameSlice, {flipUpCard, initGame, resetGame} from "./card-game.slice";
import {CardImgVm, CardVm} from "../components/card/card.vm";
import {createCardsListFromCardImgVmList} from "../card-game.mapper";

const fakeImageList: Array<CardImgVm> = [
    {
        id: '0',
        src: 'img0',
        height: 100,
        width: 100
    },
    {
        id: '1',
        src: 'img1',
        height: 100,
        width: 100
    },
    {
        id: '2',
        src: 'img2',
        height: 100,
        width: 100
    },
];

const fakeInitialCards: Array<CardVm> = [
    {
        id: 'img0-0',
        imageIsUp: false,
        isMatched: false,
        image: {id: '0', src: 'img0', height: 100, width: 100}
    },
    {
        id: 'img2-1',
        imageIsUp: false,
        isMatched: false,
        image: {id: '2', src: 'img2', height: 100, width: 100}
    },
    {
        id: 'img0-1',
        imageIsUp: false,
        isMatched: false,
        image: {id: '0', src: 'img0', height: 100, width: 100}
    },
    {
        id: 'img1-0',
        imageIsUp: false,
        isMatched: false,
        image: {id: '1', src: 'img1', height: 100, width: 100}
    },
    {
        id: 'img1-1',
        imageIsUp: false,
        isMatched: false,
        image: {id: '1', src: 'img1', height: 100, width: 100}
    },
    {
        id: 'img2-0',
        imageIsUp: false,
        isMatched: false,
        image: {id: '2', src: 'img2', height: 100, width: 100}
    }
];


describe('cardGameSlice tests', () => {
    const fakeInitialState = {
        cards: [],
        startTime: -1,
        imageList: []
    }

    it('should return the initial state', () => {
        expect(cardGameSlice(undefined, {type: 'none'})).toEqual({
            cards: [],
            startTime: -1,
            imageList: []
        })
    })

    it('should set state when action type is initGame', () => {
        const fakePayload = {
            cards: createCardsListFromCardImgVmList(fakeImageList),
            startTime: 1636902025,
            imageList: fakeImageList,
        };

        const newState = cardGameSlice(fakeInitialState, initGame(fakePayload));
        expect(newState).toEqual(fakePayload);
    });

    it('should set startTime when action type is resetGame', () => {
        const newState = cardGameSlice(fakeInitialState, resetGame(1636902145000));
        expect(newState.startTime).toEqual(1636902145000);
    });

    it('should shuffle cards when action type is resetGame', () => {
        const fakeCards = createCardsListFromCardImgVmList(fakeImageList);
        const newState = cardGameSlice({
            cards: fakeCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }, resetGame(1636902145000));
        expect(newState.cards).toEqual(expect.arrayContaining(fakeCards));
    });

    it('should face up the card passed as payload when action type is flipUpCard', () => {
        const mockCards = [...fakeInitialCards];
        const newState = cardGameSlice({
            cards: mockCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }, flipUpCard(mockCards[0]));
        expect(newState.cards[0].imageIsUp).toBeTruthy();
    });

    it('should face up a second card passed as payload when action type is flipUpCard', () => {
        const mockCards = [...fakeInitialCards];
        mockCards[0] = {...mockCards[0], imageIsUp: true};
        const newState = cardGameSlice({
            cards: mockCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }, flipUpCard(mockCards[1]));
        expect(newState.cards[0].imageIsUp).toBeTruthy();
        expect(newState.cards[1].imageIsUp).toBeTruthy();
    });

    it('should face down up non-equal pair of cards when action type is flipUpCard', () => {
        const mockCards = [...fakeInitialCards];
        mockCards[0] = {...mockCards[0], imageIsUp: true};
        mockCards[1] = {...mockCards[1], imageIsUp: true};
        const newState = cardGameSlice({
            cards: mockCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }, flipUpCard(mockCards[2]));
        expect(newState.cards[0].imageIsUp).toBeFalsy();
        expect(newState.cards[1].imageIsUp).toBeFalsy();
        expect(newState.cards[2].imageIsUp).toBeTruthy();
    });

    it('should set as matched equal pair of cards when action type is flipUpCard', () => {
        const mockCards = [...fakeInitialCards];
        mockCards[0] = {...mockCards[0], imageIsUp: true};
        mockCards[2] = {...mockCards[2], imageIsUp: true};
        const newState = cardGameSlice({
            cards: mockCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }, flipUpCard(mockCards[1]));
        expect(newState.cards[0].imageIsUp).toBeTruthy();
        expect(newState.cards[0].isMatched).toBeTruthy();

        expect(newState.cards[2].imageIsUp).toBeTruthy();
        expect(newState.cards[2].isMatched).toBeTruthy();

        expect(newState.cards[1].imageIsUp).toBeTruthy();
    });

    it('should not face down already matched cards when action type is flipUpCard', () => {
        const mockCards = [...fakeInitialCards];
        mockCards[0] = {...mockCards[0], imageIsUp: true, isMatched: true};
        mockCards[2] = {...mockCards[2], imageIsUp: true, isMatched: true};
        mockCards[1] = {...mockCards[1], imageIsUp: true};
        mockCards[3] = {...mockCards[3], imageIsUp: true};
        const newState = cardGameSlice({
            cards: mockCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }, flipUpCard(mockCards[5]));

        expect(newState.cards[0].imageIsUp).toBeTruthy();
        expect(newState.cards[0].isMatched).toBeTruthy();

        expect(newState.cards[2].imageIsUp).toBeTruthy();
        expect(newState.cards[2].isMatched).toBeTruthy();

        expect(newState.cards[1].imageIsUp).toBeFalsy();
        expect(newState.cards[3].imageIsUp).toBeFalsy();

        expect(newState.cards[5].imageIsUp).toBeTruthy();
    });

    it('should set as matched all cards when action type is flipUpCard and all cards are already faced up', () => {
        const mockCards = [...fakeInitialCards];
        mockCards[0] = {...mockCards[0], imageIsUp: true};
        mockCards[2] = {...mockCards[2], imageIsUp: true};
        mockCards[1] = {...mockCards[1], imageIsUp: true};
        mockCards[3] = {...mockCards[3], imageIsUp: true};
        mockCards[4] = {...mockCards[4], imageIsUp: true};
        const newState = cardGameSlice({
            cards: mockCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }, flipUpCard(mockCards[5]));

        expect(newState.cards[0].imageIsUp).toBeTruthy();
        expect(newState.cards[0].isMatched).toBeTruthy();

        expect(newState.cards[2].imageIsUp).toBeTruthy();
        expect(newState.cards[2].isMatched).toBeTruthy();

        expect(newState.cards[1].imageIsUp).toBeTruthy();
        expect(newState.cards[1].isMatched).toBeTruthy();

        expect(newState.cards[3].imageIsUp).toBeTruthy();
        expect(newState.cards[3].isMatched).toBeTruthy();

        expect(newState.cards[4].imageIsUp).toBeTruthy();
        expect(newState.cards[4].isMatched).toBeTruthy();

        expect(newState.cards[5].imageIsUp).toBeTruthy();
        expect(newState.cards[5].isMatched).toBeTruthy();
    });

    it('should not do anything when clicking twice on a faced up card', () => {
        const mockCards = [...fakeInitialCards];
        mockCards[0] = {...mockCards[0], imageIsUp: true};
        const fakedState = {
            cards: mockCards,
            startTime: 1636902025,
            imageList: fakeImageList,
        }
        const newState = cardGameSlice(fakedState, flipUpCard(mockCards[0]));
        expect(newState).toBe(fakedState);
    });
});
