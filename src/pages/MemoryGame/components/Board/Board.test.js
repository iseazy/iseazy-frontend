// Board.test.js
import { render, screen, fireEvent } from '@testing-library/react';
import Board from './Board';

describe('Board', () => {
  test('renders a card for each element in the cards prop', () => {
    const cards = [
      { imgSrc: 'image2.png', revealed: false },
      { imgSrc: 'image3.png', revealed: false },
    ];
    render(<Board cards={cards} onCardClicked={() => {}} />);
    const cardElements = screen.getAllByRole('button');
    expect(cardElements).toHaveLength(2);
  });

  test('on click to a card onCardClicked must be called', () => {
    const cards = [
      { imgSrc: 'imagen2.png', revealed: false },
    ];
    const mockOnClick = jest.fn();
    render(<Board cards={cards} onCardClicked={mockOnClick} />);
    const cardElement = screen.getByRole('button');
    fireEvent.click(cardElement);
    expect(mockOnClick).toHaveBeenCalledWith(cards[0]);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
