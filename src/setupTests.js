// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

global.mockDeck = [
    { id: 1, sharedId: 123, src: 'testSourceA',  clicked: false, flipped: true },
    { id: 2, sharedId: 123, src: 'testSourceA',  clicked: false, flipped: true },
    { id: 3, sharedId: 456, src: 'testSourceB',  clicked: true,  flipped: true },
    { id: 4, sharedId: 456, src: 'testSourceB',  clicked: false, flipped: false },
    { id: 5, sharedId: 789, src: 'testSourceC',  clicked: false, flipped: false },
    { id: 6, sharedId: 789, src: 'testSourceC',  clicked: false, flipped: false },
];

global.mockDeckPaired = [
    { id: 1, sharedId: 123, src: 'testSourceA',  clicked: false, flipped: true },
    { id: 2, sharedId: 123, src: 'testSourceA',  clicked: false, flipped: true },
    { id: 3, sharedId: 456, src: 'testSourceB',  clicked: true,  flipped: true },
    { id: 4, sharedId: 456, src: 'testSourceB',  clicked: true,  flipped: true },
    { id: 5, sharedId: 789, src: 'testSourceC',  clicked: false, flipped: false },
    { id: 6, sharedId: 789, src: 'testSourceC',  clicked: false, flipped: false },
];

global.mockDeckUnpaired = [
    { id: 1, sharedId: 123, src: 'testSourceA',  clicked: false, flipped: true },
    { id: 2, sharedId: 123, src: 'testSourceA',  clicked: false, flipped: true },
    { id: 3, sharedId: 456, src: 'testSourceB',  clicked: true,  flipped: true },
    { id: 4, sharedId: 456, src: 'testSourceB',  clicked: false, flipped: false },
    { id: 5, sharedId: 789, src: 'testSourceC',  clicked: true,  flipped: true },
    { id: 6, sharedId: 789, src: 'testSourceC',  clicked: false, flipped: false },
];

global.mockClickedId = 3;

global.mockPairedId = 1;

global.mockUnflippedId = 4;
