import './App.css';
import _ from "lodash";

function Board({board: {rows, columns}}) {
    return (
        <div id={"board"}>
            {_.times(rows, (row) =>
                <div className={"row"} key={`row:${row}`}>
                    {_.times(columns, (column) =>
                        <div className={"cell"} role={"cell"} key={`cell:${row},${column}`}/>)
                    }
                </div>)
            }
        </div>
    )
}

function App({board}) {
    return (
        <div className="App">
            <h1>Tetrix</h1>
            <Board board={board}/>
        </div>
    );
}

export default App;
