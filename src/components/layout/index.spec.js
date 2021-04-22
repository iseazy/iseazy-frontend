import { render } from '../../setupTests';
import Layout from './index';

describe('[Layout]', () => {
  it('Renders Splash Screen', () => {
    const { getByTestId } = render(<Layout initialState="SPLASH_SCREEN" />);
    expect(getByTestId('splashScreen')).toBeInTheDocument();
  });

  it('Renders Game Screen', () => {
    const { getByTestId } = render(<Layout initialState="GAME_SCREEN" />);
    expect(getByTestId('gameContainer')).toBeInTheDocument();
  });
});
