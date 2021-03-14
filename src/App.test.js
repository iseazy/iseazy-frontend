import {render, screen} from "@testing-library/react";
import App from "./App";

test("renders the start screen", () => {
	render(<App />);
	const buttonElement = screen.getByText(/Comenzar/i);
	const titleElement = screen.getByText(/MeMemory/i);
	expect(buttonElement).toBeInTheDocument();
	expect(titleElement).toBeInTheDocument();
});
