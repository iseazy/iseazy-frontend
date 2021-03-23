import { configure, fireEvent, render } from "@testing-library/react";
import Start from "./Start";

configure({testIdAttribute: "data-spec"});

describe("Start", () => {
	it("component has the expected elements with the correct text", () => {
		const props = {
			startGame: jest.fn(() => {})
		};
		const {getByTestId} = render(
			<Start {...props}></Start>
		);

		getByTestId("bulbIcon");
		expect(getByTestId("startTitle")).toHaveTextContent('MeMemory');
        expect(getByTestId("startButton")).toHaveTextContent('Comenzar');
    });

	it("clicking on the button should call the startGame function", async () => {
		const props = {
			startGame: jest.fn(() => {})
		};
		const {getByTestId} = render(
			<Start {...props}></Start>
		);
		const button = getByTestId("startButton");

		await fireEvent.click(button);

		expect(props.startGame).toHaveBeenCalled();
		
	})
});