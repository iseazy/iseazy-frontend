import { configure, fireEvent, render } from "@testing-library/react";
import Completed from "./Completed";

configure({testIdAttribute: "data-spec"});

describe("Completed", () => {
	it("component has the expected elements with the correct text", () => {
		const props = {
			resetGame: jest.fn(() => {}),
            time: 90000
		};
		const {getByTestId} = render(
			<Completed {...props}></Completed>
		);

		getByTestId("clockIcon");
		expect(getByTestId("completedTitle")).toHaveTextContent('¡Completado!');
		expect(getByTestId("completedTime")).toHaveTextContent('1:30');
        expect(getByTestId("playAgainButton")).toHaveTextContent('Jugar otra vez');
    });

	it("clicking on the button should call the resetGame function", async () => {
		const props = {
			resetGame: jest.fn(() => {}),
            time: 0
		};
		const {getByTestId} = render(
			<Completed {...props}></Completed>
		);
		const button = getByTestId("playAgainButton");

		await fireEvent.click(button);

		expect(props.resetGame).toHaveBeenCalled();
		
	})
});