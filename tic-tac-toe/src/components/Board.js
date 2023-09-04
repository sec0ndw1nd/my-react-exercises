// import { useState } from 'react';
import Square from './Square';

function getWinner(squares) {
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
    if (
      squares[a] &&
      squares[b] &&
      squares[c] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

export default function Board({ currentPlayer, squares, onPlay }) {
  const winner = getWinner(squares);
  const status = winner ? `Winner is ${winner}` : `Current Player: ${currentPlayer}`;

  const onClickSquare = (index) => {
    if (squares[index] || winner) return;

    const nextSquares = [...squares];
    nextSquares[index] = currentPlayer;
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onClickSquare={() => onClickSquare(0)} />
        <Square value={squares[1]} onClickSquare={() => onClickSquare(1)} />
        <Square value={squares[2]} onClickSquare={() => onClickSquare(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onClickSquare={() => onClickSquare(3)} />
        <Square value={squares[4]} onClickSquare={() => onClickSquare(4)} />
        <Square value={squares[5]} onClickSquare={() => onClickSquare(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onClickSquare={() => onClickSquare(6)} />
        <Square value={squares[7]} onClickSquare={() => onClickSquare(7)} />
        <Square value={squares[8]} onClickSquare={() => onClickSquare(8)} />
      </div>
    </>
  );
}
