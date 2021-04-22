import userEvent from '@testing-library/user-event';
import SplashScreen from './index';
import { render } from '../../setupTests';

describe('[SplashScreen]', () => {
  it('Renders', () => {
    const { getByText } = render(<SplashScreen />);

    const expectedMsg = 'MeMemory';
    expect(getByText(expectedMsg)).toBeInTheDocument();
  });

  it('Calls the onClick Handler', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<SplashScreen onClick={mockOnClick} />);
    const startButton = getByText('Comenzar');
    userEvent.click(startButton);

    expect(mockOnClick).toHaveBeenCalled();
  });
});
