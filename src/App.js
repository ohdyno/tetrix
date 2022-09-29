import './App.css';
import _ from "lodash";

function Board({board: {rows, columns}}) {
    return (
        <div id={"board"}>
            {_.times(rows, (row) =>
                <div data-testid={"row"} key={`row:${row}`}>
                    {_.times(columns, (column) =>
                        <div data-testid={"cell"} key={`cell:${row},${column}`}/>)
                    }
                </div>)
            }
        </div>
    )
}

function App({board}) {
    return (
        <div className="App">
            <Board board={board}/>
        </div>
    );
}

export default App;
