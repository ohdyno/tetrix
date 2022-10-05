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


describe('rendering pieces', function () {
    it('renders a horizontal line piece at the top of the board', () => {
        const piece = {
            type: "line",
            rotation: 90,
            coordinate: {
                row: 0,
                column: 0
            }

        };
        render(<App board={{rows: 4, columns: 4}} pieces={[piece]}/>);
        const cells = screen.getAllByRole(/filled-cell/i);
        expect(cells.length).toEqual(4);
    });
});