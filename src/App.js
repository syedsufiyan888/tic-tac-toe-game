import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [Squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (Squares[i] || CalculateWinner(Squares)) {
      return;
    }
    const nextSquare = Squares.slice();
    if (xIsNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquares(nextSquare);
    setXIsNext(!xIsNext);
  }
  const winner = CalculateWinner(Squares);
  let Status;
  if (winner) {
    Status = "Winner: " + winner;
  } else {
    Status = "Next Player: " + (xIsNext ? "X" : "O");
  }
  function Restart() {
    // const a = null;
    setSquares(Array(9).fill(null));
  }
  return (
    <div className="tictactoe">
      <h2>Tic-Tac-Toe</h2>
      <div className="status">{Status}</div>
      <div className="board-row">
        <Square value={Squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={Squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={Squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={Squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={Squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={Squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={Squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={Squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={Squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
      <button className="restartBtn" onClick={Restart}>
        RESTART
      </button>
    </div>
  );
}

function CalculateWinner(Squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (Squares[a] && Squares[a] === Squares[b] && Squares[a] === Squares[c]) {
      return Squares[a];
    }
  }
  return null;
}
// export default function Game() {
//   const [xIsNext, setXIsNext] = useState(true);
//   const [History, setHistory] = useState([Array(9).fill(null)]);
//   const currentSquare = History[History.length - 1];
//   function handlePlay(nextSquare) {
//     //ToDo
//   }

//   return (
//     <div>
//       <div>
//         <Board xIsNext={xIsNext} Squares={currentSquare} onPlay={handlePlay} />
//       </div>
//       <div>
//         <ol>{/* {todo} */}</ol>
//       </div>
//     </div>
//   );
// }
