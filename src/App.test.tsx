import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'
import { AVAILABLE_ITEMS } from './constants'

describe('#App', () => {
  describe('when the game is not started', () => {
    it('renders the home view', () => {
      render(<App />)
      const title = screen.getByRole('heading')
      expect(title).toBeInTheDocument()
      expect(title).toHaveTextContent('MeMemory')
    })
  })

  describe('when user clicks on the start button', () => {
    it('renders the game view', async () => {
      render(<App />)
      const button = screen.getByRole('button')
      expect(button).toBeInTheDocument()
      fireEvent.click(button)

      const cards = await screen.findAllByRole('article')
      expect(cards).toHaveLength(AVAILABLE_ITEMS.length * 2)
    })
  })
})
