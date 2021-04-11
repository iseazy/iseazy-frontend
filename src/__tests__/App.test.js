import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'

describe('App component', () => {
  test('renders the home view', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /mememory/i })).toBeVisible()
  })

  test('renders the game board view with eighteen cards', () => {
    render(<App />)

    const startButton = screen.getByRole('button', { name: /comenzar/i })
    fireEvent.click(startButton)

    const cards = screen.getAllByTestId('card')

    expect(cards.length).toBe(18)
  })
})
