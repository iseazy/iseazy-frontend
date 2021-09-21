import { render, fireEvent, screen } from '@testing-library/react';
import { GameEnd } from '../../../components/game-end/game-end';

jest.mock('../../../components/game-end/game-end-icon', () => ({
    GameEndIcon: () => 'mockedIcon'
}));

describe('<GameEnd />', () => {
    const testProps = {
        time: 150,
        onClick: () => {}
    };
    
    it('should render component', () => {
        const { asFragment } = render(<GameEnd { ...testProps }/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should be clicked', () => {
        const onClick = jest.fn();
        render(<GameEnd { ...testProps } onClick={ onClick }/>);

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });
});
