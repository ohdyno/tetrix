import {execute} from "./engine";

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

    it('stops the piece when it reaches the bottom for the board', () => {
        const initialState = {
            board: {rows: 4, columns: 4},
            pieces: {
                3: {
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
                3: {
                    0: "line",
                    1: "line",
                    2: "line",
                    3: "line"
                }
            }
        })
    });
});