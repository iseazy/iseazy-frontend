import {configure, fireEvent, render} from "@testing-library/react";
import Card from "./Card";

configure({testIdAttribute: "data-spec"});

describe("Card", () => {
	afterAll(() => jest.resetAllMocks());

	it("component has the expected elements with the correct text", () => {
		const props = {
			image: "imageSrc",
			flip: jest.fn(() => {}),
			isFlipped: false,
			index: 10,
		};
		const {getByTestId} = render(<Card {...props}></Card>);

		const imageSrc = getByTestId("cardImage").getAttribute("src");
		expect(imageSrc).toBe(props.image);
		expect(getByTestId("cardNumber")).toHaveTextContent(props.index);
	});
	describe("if the card is not flipped", () => {
		it("clicking on the item calls flip", async () => {
			const props = {
				image: "imageSrc",
				flip: jest.fn(() => {}),
				isFlipped: false,
				index: 10,
			};
			const {getByTestId} = render(<Card {...props}></Card>);

			const cardFront = getByTestId("cardFront");

			await fireEvent.click(cardFront);

			expect(props.flip).toHaveBeenCalled();
		});
		it("the class card__inner--flipped is not present", () => {
			const props = {
				image: "imageSrc",
				flip: jest.fn(() => {}),
				isFlipped: false,
				index: 10,
			};
			const {getByTestId} = render(<Card {...props}></Card>);

			const cardInner = getByTestId("cardInner");
			expect(cardInner.classList.values()).not.toContain(
				"card__inner--flipped"
			);
		});
	});

	describe("if the card is flipped", () => {
		it("clicking on the item does nothing", async () => {
			const props = {
				image: "imageSrc",
				flip: jest.fn(() => {}),
				isFlipped: true,
				index: 10,
			};
			const {getByTestId} = render(<Card {...props}></Card>);

			const cardFront = getByTestId("cardFront");

			await fireEvent.click(cardFront);

			expect(props.flip).not.toHaveBeenCalled();
		});
		it("the class card__inner--flipped is present", () => {
			const props = {
				image: "imageSrc",
				flip: jest.fn(() => {}),
				isFlipped: true,
				index: 10,
			};
			const {getByTestId} = render(<Card {...props}></Card>);

			const cardInner = getByTestId("cardInner");
			expect(cardInner.classList.values()).toContain(
				"card__inner--flipped"
			);
		});
	});
});
