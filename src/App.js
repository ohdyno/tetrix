import './App.css';
import _ from "lodash";

function Board({board: {rows, columns}}) {
    return (
        <div id={"board"}>
            {_.times(rows, (row) =>
                <div key={`row:${row}`}>
                    {_.times(columns, (column) =>
                        <div role={"cell"} key={`cell:${row},${column}`}/>)
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
