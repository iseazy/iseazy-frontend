import React from 'react';
import {act} from 'react-dom/test-utils';
import {render, screen} from '@testing-library/react';
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {NotFound} from './not-found.component';
import { appBaseRoutes } from "../../../core";

const renderWithRouter = (component) => {
    return {
        ...render(
            <MemoryRouter initialEntries={["/test"]}>
                <Routes>
                    <Route path={appBaseRoutes.splashScreen} element={<h1>INDEX</h1>}/>
                    <Route path="/test" element={component}/>
                </Routes>
            </MemoryRouter>
        ),
    };
};

describe('Not Found component tests', () => {
    it('should display a paragraph', () => {
        renderWithRouter(
            <NotFound/>
        );

        const paragraphElement = screen.getByLabelText('not-found-paragraph') as HTMLParagraphElement;
        expect(paragraphElement).toBeInTheDocument();
        expect(paragraphElement).toHaveTextContent('¡Ups! ¡Page not found! Error 404');
    });

    it('should display link element', () => {
        renderWithRouter(
            <NotFound/>
        );

        const goIndexLink = screen.getByRole('link');
        expect(goIndexLink).toBeInTheDocument();
    });

    it('should go to index when clicking the Link', () => {
        renderWithRouter(
            <NotFound/>
        );

        act(() => {
            const goIndexLink = screen.getByRole('link');
            goIndexLink.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });
        expect(document.body.textContent).toBe('INDEX');
    });
});
