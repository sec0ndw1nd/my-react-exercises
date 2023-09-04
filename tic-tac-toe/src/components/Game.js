import { useState } from 'react';
import Board from './Board';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [turn, setTurn] = useState(0);
  const currentSquares = history[turn];
  const currentPlayer = turn % 2 ? 'X' : 'O';

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, turn + 1), nextSquares];
    setHistory(nextHistory);
    setTurn(nextHistory.length - 1);
  };

  const handleHistory = (n) => {
    setTurn(n);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board currentPlayer={currentPlayer} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <div className="status">{`Current Turn: ${turn}`}</div>
        <ol>
          {history.map((_, n) => (
            <li key={`history-list-` + n}>
              <button onClick={() => handleHistory(n)}>
                {n > 0 ? `Go to turn #${n}` : `Go to game start`}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Game;
