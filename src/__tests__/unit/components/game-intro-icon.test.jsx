import { render } from '@testing-library/react';
import { GameIntroIcon } from '../../../components/game-intro/game-intro-icon';

describe('<GameEndIcon />', () => {
    it('should render icon component', () => {
        const { asFragment } = render(<GameIntroIcon />);

        expect(asFragment()).toMatchSnapshot();
    });
});
