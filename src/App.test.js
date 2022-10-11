import {render, screen} from '@testing-library/react';
import App from './App';
import _ from "lodash";

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


function containsCell(cells, row, column) {
    return _.some(cells, (cell => cell.dataset.row === row && cell.dataset.column === column));
}

describe('rendering pieces', function () {
    it('renders filled cells in the correct locations', () => {
        const pieces = {
            0: {
                0: "line",
                1: "line",
                2: "line",
                3: "line"
            }
        };
        render(<App board={{rows: 4, columns: 4}} pieces={pieces}/>);
        const cells = screen.getAllByRole(/filled-cell/i);
        expect(cells.length).toEqual(4);
        expect(containsCell(cells, `0`, "0")).toBeTruthy()
        expect(containsCell(cells, "0", "1")).toBeTruthy()
        expect(containsCell(cells, "0", "2")).toBeTruthy()
        expect(containsCell(cells, "0", "3")).toBeTruthy()
    });

    it('renders filled cells with correct type', () => {
        const pieces = {
            0: {
                0: "line",
                1: "line",
                2: "line",
                3: "line"
            }
        };
        render(<App board={{rows: 4, columns: 4}} pieces={pieces}/>);
        const cells = screen.getAllByRole(/filled-cell/i);
        expect(cells.length).toEqual(4);
        expect(_.every(cells, (cell => cell.dataset.pieceType === "line"))).toBeTruthy()
    });
});