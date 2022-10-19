import _ from "lodash";

function execute(state, action) {
    const pieces = _.mapKeys(state.pieces, (row, rowIndex) => Number(rowIndex) + 1);
    return {
        board: state.board,
        pieces: pieces
    };
}

describe('Engine', function () {
    it('moves the piece on the board down when a "tick" event happens', () => {
        const initialState = {
            board: {rows: 4, columns: 4},
            pieces: {
                0: {
                    0: "line",
                    1: "line",
                    2: "line",
                    3: "line"
                }
            }
        }

        const tickAction = {
            type: "tick"
        };

        const newState = execute(initialState, tickAction)

        expect(newState).toEqual({
            board: initialState.board,
            pieces: {
                1: {
                    0: "line",
                    1: "line",
                    2: "line",
                    3: "line"
                }
            }
        })
    });
});