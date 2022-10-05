import {render, screen} from '@testing-library/react';
import App from './App';

describe('static application elements', function () {
    it('has the name "Tetrix"', () => {
        render(<App board={{rows: 1, columns: 1}}/>);
        const title = screen.getByText(/tetrix/i);
        expect(title).toBeInTheDocument();
    });
});

describe('rendering the board', function () {
    it('renders an empty 1x1 board', () => {
        render(<App board={{rows: 1, columns: 1}}/>);
        const cells = screen.getAllByRole(/cell/i);
        expect(cells.length).toEqual(1);
    });

    it('renders an empty 3x3 board', () => {
        render(<App board={{rows: 3, columns: 3}}/>);
        const cells = screen.getAllByRole(/cell/i);
        expect(cells.length).toEqual(9);
    });
});
