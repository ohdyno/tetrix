import './App.css';
import _ from "lodash";

function calculateAllCoordinates(piece) {
    const {row, column} = piece.coordinate;
    if (piece.rotation === 0) {
        return _.times(4, (increment) => ({row: row + increment, column}));
    }
    return _.times(4, (increment) => ({row, column: column + increment}));
}

function isFilledForPiece(piece, row, column) {
    const allCoordinates = calculateAllCoordinates(piece);
    return _.some(allCoordinates, coordinate => coordinate.row === row && coordinate.column === column)
}

function isFilled(pieces, row, column) {
    return _.some(pieces,piece => isFilledForPiece(piece, row, column))
}

function Board({board: {rows, columns}, pieces}) {
    return (
        <div id={"board"}>
            {_.times(rows, (row) =>
                <div className={"row"} key={`row:${row}`}>
                    {_.times(columns, (column) => {
                        if (isFilled(pieces, row, column)) {
                            return <div className={"cell filled"} role={"filled-cell"} key={`cell:${row},${column}`} data-row={row} data-column={column}/>
                        }
                        return <div className={"cell"} role={"cell"} key={`cell:${row},${column}`} data-row={row} data-column={column}/>;
                    })}
                </div>)
            }
        </div>
    )
}

function App({board, pieces: pieces = [{
    type: "line",
    rotation: 90,
    coordinate: {
        row: 0,
        column: 0
    }

}]}) {
    return (
        <div className="App">
            <h1>Tetrix</h1>
            <Board board={board} pieces={pieces}/>
        </div>
    );
}

export default App;
