import { render, fireEvent, screen } from '@testing-library/react';
import { GameCard } from '../../../components/game-card/game-card';

describe('<GameCard />', () => {
    const testProps = {
        id: 1,
        src: 'testSource',
        flipped: true,
        title: '0',
        onClick: () => {}
    };
    
    it('should render flipped card', () => {
        const { asFragment } = render(<GameCard { ...testProps }/>);
        expect(asFragment()).toMatchSnapshot();
    });
    
    it('should render unflipped card', () => {
        const { asFragment } = render(<GameCard { ...testProps } flipped={ false }/>);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should be clicked', () => {
        const onClick = jest.fn();
        render(<GameCard { ...testProps } onClick={ onClick }/>);

        fireEvent.click(screen.getByRole('button'));

        expect(onClick).toHaveBeenCalledWith(testProps.id);
    });
});
