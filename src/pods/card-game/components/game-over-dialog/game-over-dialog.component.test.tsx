import React from 'react';
import {act} from 'react-dom/test-utils';
import {render, screen, fireEvent} from '@testing-library/react';
import {GameOverDialog} from './game-over-dialog.component';

describe('GaveOverDialog component tests', () => {
    const defaultProps = {
        isOpen: false,
        duration: "2min 30s",
        onHide: jest.fn()
    };

    it('should display empty when isOpen is false', () => {
        const {container} = render(
            <GameOverDialog {...defaultProps}/>
        );

        expect(container).toBeEmptyDOMElement();
    });

    it('should display correctly when isOpen is true', () => {
        render(
            <GameOverDialog {...defaultProps} isOpen={true}/>
        );
        const dialogElement = screen.getByRole('dialog', { hidden: true });
        expect(dialogElement).toBeInTheDocument();

        const headingElement = screen.getByRole('heading', { hidden: true });
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('¡Completado!');

        const buttonElement = screen.getByRole('button', {hidden: true});
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Jugar otra vez');
    });

    it('should display the game duration based on the props', () => {
        render(
            <GameOverDialog {...defaultProps} isOpen={true}/>
        );

        const labelElement = screen.getByLabelText('game-duration-label');
        expect(labelElement).toBeInTheDocument();
        expect(labelElement).toHaveTextContent('2min 30s');
    });

    it('should call onHide when clicking on dialog button', () => {
        const onHideStub = jest.fn();
        render(
            <GameOverDialog {...defaultProps} isOpen={true} onHide={onHideStub}/>
        );

        const buttonElement = screen.getByRole('button', {hidden: true});
        fireEvent.click(buttonElement);
        expect(onHideStub).toHaveBeenCalled();
    });
});
