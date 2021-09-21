import { render, fireEvent, screen } from '@testing-library/react';
import { GameIntro } from '../../../components/game-intro/game-intro';

jest.mock('../../../components/game-intro/game-intro-icon', () => ({
    GameIntroIcon: () => 'mockedIcon'
}));

describe('<GameIntro />', () => {
    const testProps = {
        onClick: () => {}
    };
    
    it('should render component', () => {
        const { asFragment } = render(<GameIntro { ...testProps }/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should be clicked', () => {
        const onClick = jest.fn();
        render(<GameIntro onClick={ onClick }/>);

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalled();
    });
});
