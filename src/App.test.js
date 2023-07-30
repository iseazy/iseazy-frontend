import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  test("should render the welcome page by default", async () => {
    render(<App />);
    const welcomeElement = await screen.findByText("MeMemory");
    expect(welcomeElement).toBeInTheDocument();
  });
  test("should render the memory game page when the path is /memory-game", async () => {
    jest.useFakeTimers();
    window.history.pushState({}, "Memory game works!", "/memory-game");
    render(<App />);
    jest.advanceTimersByTime(1000);
    const buttons = await screen.findAllByRole("button", { timeout: 3000 });
    expect(buttons.length).toBe(18);
  });
});
