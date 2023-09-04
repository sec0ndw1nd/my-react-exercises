import { useState } from 'react';
import Board from './Board';

function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [turn, setTurn] = useState(0);
  const [isDescending, setIsDescending] = useState(false);
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
        <Board
          currentTurn={turn}
          currentPlayer={currentPlayer}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>
      <div className="game-info">
        <div className="status">{`Current Turn: ${turn}`}</div>
        <button onClick={() => setIsDescending((prev) => !prev)}>
          order by {isDescending ? 'ascending' : 'descending'}
        </button>
        <ol>
          {history.map((_, n) => {
            const orderNum = isDescending ? history.length - 1 - n : n;
            return (
              <li key={`history-list-` + orderNum}>
                <button onClick={() => handleHistory(orderNum)}>
                  {orderNum > 0 ? `Go to turn #${orderNum}` : `Go to game start`}
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}

export default Game;
