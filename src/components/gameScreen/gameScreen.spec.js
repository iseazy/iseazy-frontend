import userEvent from '@testing-library/user-event';
import GameScreen from './index';
import { render } from '../../setupTests';
import { mockDataCards, mockDefaultContext } from '../../../tests/test-utils';
import { KEY_CTXT_CARDS } from '../../api/gameContext/gameContextKeys';
import { wait } from '../../utils/timeUtils';
import { waitFor } from '@testing-library/react';

describe('[GameScreen]', () => {
  let mockOnFinish = jest.fn();
  let mockTimePlaying = 85; // 1:25s
  let mockOnEndGame = jest.fn();

  it('Renders', () => {
    const { getByText } = render(
      <GameScreen
        onFinish={mockOnFinish}
        timePlaying={mockTimePlaying}
        onEndGame={mockOnEndGame}
      />,
    );

    // mockContext has 4 cards
    const labels = [1, 2, 3, 4];
    labels.forEach((label) => expect(getByText(label)).toBeInTheDocument());
  });

  it('flips a card when it is clicked', () => {
    const desiredLabel = 1;
    const { getByText, queryByText } = render(
      <GameScreen
        onFinish={mockOnFinish}
        timePlaying={mockTimePlaying}
        onEndGame={mockOnEndGame}
      />,
    );

    const label1 = getByText(desiredLabel);
    expect(label1).toBeInTheDocument();
    userEvent.click(label1);
    const flippedLabel1 = queryByText(desiredLabel);
    expect(flippedLabel1).not.toBeInTheDocument();
  });

  it.skip('ends game when all pairs are found', async () => {
    // only two cards before shuffling.
    const mockLimitedDataCards = [{ ...mockDataCards[0] }, mockDataCards[1]];

    const mockContext = {
      ...mockDefaultContext,
      [KEY_CTXT_CARDS]: mockLimitedDataCards,
    };

    const { getByText, queryByText } = render(
      <GameScreen
        onFinish={mockOnFinish}
        timePlaying={mockTimePlaying}
        onEndGame={mockOnEndGame}
      />,
      {
        context: mockContext,
      },
    );

    const card1 = getByText(1);
    const card2 = getByText(2);

    userEvent.click(card1);

    await wait(301);

    userEvent.click(card2);

    await wait(400);

    await waitFor(() => {
      expect(queryByText('¡Completado!')).toBeInTheDocument();
      expect(queryByText('1:25')).toBeInTheDocument();
    });
  });
});
