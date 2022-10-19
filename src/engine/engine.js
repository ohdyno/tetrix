import _ from "lodash";

export function execute(state, action) {
    const pieces = _.mapKeys(state.pieces, (row, rowIndex) => {
        const newRow = Number(rowIndex) + 1;
        if (state.board.rows === newRow) {
            return rowIndex;
        }
        return newRow;
    });
    return {
        board: state.board,
        pieces: pieces
    };
}