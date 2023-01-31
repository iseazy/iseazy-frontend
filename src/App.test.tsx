import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  const button = screen.getByText(/Start Game/)
  expect(button).toBeInTheDocument()
  fireEvent.click(button)

  const game = screen.getByText(/Game/)
  expect(game).toBeInTheDocument()
})
