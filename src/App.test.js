import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("should render the welcome page by default", async () => {
    render(<App />);
    const welcomeElement = await screen.findByText("MeMemory");
    expect(welcomeElement).toBeInTheDocument();
  });
  test("should render the memory game page when the path is /memory-game", async () => {
    window.history.pushState({}, "Memory game works!", "/memory-game");
    render(<App />);
    const memoryGameElements = await screen.findAllByRole("button");
    expect(memoryGameElements.length).toBe(18);
  });
});
