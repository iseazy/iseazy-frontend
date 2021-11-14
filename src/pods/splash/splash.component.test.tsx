import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Splash} from './splash.component';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import { appBaseRoutes } from "../../core";

const renderWithRouter = (component) => {
    return {
        ...render(
            <MemoryRouter initialEntries={["/"]}>
                <Routes>
                    <Route path={appBaseRoutes.cardGame} element={<h1>INDEX</h1>}/>
                    <Route path="/" element={component}/>
                </Routes>
            </MemoryRouter>
        ),
    };
};

describe('Splash component tests', () => {
    it('should display correctly', () => {
        renderWithRouter(
            <Splash />
        );

        const headingElement = screen.getByRole('heading');
        expect(headingElement).toBeInTheDocument();
        expect(headingElement).toHaveTextContent('MeMemory');

        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toBeInTheDocument();
        expect(buttonElement).toHaveTextContent('Comenzar');
    });

    it('should navigate to card-game route when clicking on the button', () => {
        renderWithRouter(
            <Splash />
        );

        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
        expect(document.body.textContent).toBe('INDEX');
    });
});
