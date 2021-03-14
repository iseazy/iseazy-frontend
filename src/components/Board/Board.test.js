import { configure, fireEvent, render } from "@testing-library/react";
import Board from "./Board";

configure({testIdAttribute: "data-spec"});

describe("Board", () => {
    const cards = [
        {id: 0, copyId: 0, image: 'imageSrc'},
        {id: 1, copyId: 0, image: 'imageSrc'},
        {id: 2, copyId: 1, image: 'imageSrc'},
        {id: 3, copyId: 1, image: 'imageSrc'},
    ]

	it("component has 4 cards",async () => {
		const props = {
			cards: cards,
            flippedCards: {},
            completeGame: jest.fn(()=>{}),
            setFlippedCards: jest.fn(()=>{}),
		};

		const {findAllByTestId} = render(
			<Board {...props}></Board>
		);
        const list = await findAllByTestId("boardCard");

		expect(list.length).toBe(cards.length);
    });
});