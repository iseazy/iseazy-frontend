import React from 'react';
import {act} from 'react-dom/test-utils';
import {render, screen, fireEvent} from '@testing-library/react';
import { Grid } from './grid.component';

describe('Grid component tests', () => {
    it('should display grid component correctly', () => {
        const {container} = render(
            <Grid cards={[]} onClickCard={jest.fn()} />
        );

        expect(container).not.toBeEmptyDOMElement();
    });
});
