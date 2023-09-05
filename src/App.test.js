import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Timer from "./components/Timer";
import { timeFormat } from "./utils/timeFormat";

test("init MeMemory", () => {
  render(<App />);
  const linkElement = screen.getByText(/MeMemory/i);
  expect(linkElement).toBeInTheDocument();
});

test("the game has started successfully", () => {
  render(<App />);

  const comenzar = screen.getByText("Comenzar");
  fireEvent.click(comenzar);

  const linkElement = screen.getByTestId("testid-timer-gameMemory");
  expect(linkElement).toBeVisible("card-grid");
});

test("the gameMemory has a correct class", () => {
  render(<App />);

  const comenzar = screen.getByText("Comenzar");
  fireEvent.click(comenzar);

  const linkElement = screen.getByTestId("testid-timer-gameMemory");
  expect(linkElement).toHaveClass("memory-card-grid");
});

test("the Timer Component has started successfully", () => {
  render(<Timer />);

  const span = screen.getByTestId("testid-timer");

  expect(span).toHaveClass("timer");
  expect(span).toHaveTextContent("00:00");
});

test("the timeFormat function is correct", () => {
  const format = timeFormat(new Date());

  expect(format).toEqual(expect.stringMatching(/^([0-5]\d):([0-5]\d)$/));
});
