// import { useState } from 'react';
import Square from './Square';

function getWinnerIndexes(squares) {
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
      return lines[i];
    }
  }
  return null;
}

export default function Board({ currentTurn, currentPlayer, squares, onPlay }) {
  const winnerIndexes = getWinnerIndexes(squares);

  let status = '';
  if (winnerIndexes) {
    status = `Winner is ${squares[winnerIndexes[0]]}`;
  } else {
    status = currentTurn < 9 ? `Current Player: ${currentPlayer}` : 'No Winner';
  }

  const onClickSquare = (index) => {
    if (squares[index] || winnerIndexes) return;

    const nextSquares = [...squares];
    nextSquares[index] = currentPlayer;
    onPlay(nextSquares);
  };

  return (
    <>
      <div className="status">{status}</div>
      {Array(3)
        .fill(null)
        .map((_, i) => {
          return (
            <div key={`board-row-${i}`} className="board-row">
              {Array(3)
                .fill(null)
                .map((__, j) => {
                  const squareIndex = 3 * i + j;
                  return (
                    <Square
                      key={`square-${squareIndex}`}
                      value={squares[squareIndex]}
                      isWinnerSquare={winnerIndexes?.includes(squareIndex)}
                      onClickSquare={() => onClickSquare(squareIndex)}
                    />
                  );
                })}
            </div>
          );
        })}
    </>
  );
}
