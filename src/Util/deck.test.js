import {generateDeck} from "./deck";

it("the generated deck has the same card duplicated but with different id", () => {
	const deck = generateDeck();
	deck.forEach((card) => {
		expect(
			deck.find(
				(c) =>
					c.copyId === card.copyId &&
					c.id === card.id &&
					c.image === card.image
			)
		).toBeTruthy();
	});
});
