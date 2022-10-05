import './App.css';
import _ from "lodash";

function calculateAllCoordinates(piece) {
    return [{row: 0, column: 0}, {row: 0, column: 1}, {row: 0, column: 2}, {row: 0, column: 3}]
}

function isFilledForPiece(piece, row, column) {
    const allCoordinates = calculateAllCoordinates(piece);
    return allCoordinates.some(coordinate => coordinate.row === row && coordinate.column === column)
}

function isFilled(pieces, row, column) {
    return pieces.some(piece => isFilledForPiece(piece, row, column))
}

function Board({board: {rows, columns}, pieces}) {
    return (
        <div id={"board"}>
            {_.times(rows, (row) =>
                <div className={"row"} key={`row:${row}`}>
                    {_.times(columns, (column) => {
                        if (isFilled(pieces, row, column)) {
                            return <div className={"cell filled"} role={"filled-cell"} key={`cell:${row},${column}`}/>
                        }
                        return <div className={"cell"} role={"cell"} key={`cell:${row},${column}`}/>;
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
