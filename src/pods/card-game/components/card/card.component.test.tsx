import React from 'react';
import {act} from 'react-dom/test-utils';
import {render, screen, fireEvent} from '@testing-library/react';
import { createInitialCardVm, createInitialCardImgVm } from './card.vm';
import { Card } from './card.component';

describe('Card component tests', () => {
    const mockedCard = createInitialCardVm();
    const mockedImage = createInitialCardImgVm();
    const defaultProps = {
        position: 5, 
        card: {...mockedCard, image: mockedImage},
        onClick: jest.fn()
    };

    it('should display a card correctly', () => {
        render(
            <Card {...defaultProps} card={{...mockedCard, image: {...mockedImage, src: 'meme5'}}}/>
        );

        const labelElement = screen.getByLabelText('card-position-label');
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveTextContent('5');

        const imageElement = screen.getByAltText('flipped 5');
        expect(imageElement).toBeInTheDocument();
        expect(imageElement).toHaveAttribute('src', '/images/meme5.png');
    });

    it('should display the card faced down when imageIsUp is false', () => {
        const {container} = render(
            <Card {...defaultProps}/>
        );

        expect(container.firstChild).not.toHaveClass('animation');
    });

    it('should display the card faced up when imageIsUp is true', () => {
        const {container} = render(
            <Card {...defaultProps} card={{...defaultProps.card, imageIsUp: true}}/>
        );

        expect(container.firstChild).toHaveClass('animation');
    });

    it('should call onClick when flipping up a card', () => {
        const onClickStub = jest.fn();
        const {container} = render(
            <Card {...defaultProps} onClick={onClickStub}/>
        );

        fireEvent.click(container.firstChild);
        expect(onClickStub).toHaveBeenCalled();
        expect(onClickStub).toHaveBeenCalledWith(defaultProps.card);
    });
});
