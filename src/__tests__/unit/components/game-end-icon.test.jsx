import { render } from '@testing-library/react';
import { GameEndIcon } from '../../../components/game-end/game-end-icon';

describe('<GameEndIcon />', () => {
    it('should render icon component', () => {
        const { asFragment } = render(<GameEndIcon />);

        expect(asFragment()).toMatchSnapshot();
    });
});
