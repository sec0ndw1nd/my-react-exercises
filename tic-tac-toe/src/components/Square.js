export default function Square({ value, isWinnerSquare, onClickSquare }) {
  return (
    <button className={`square ${isWinnerSquare && 'highlight'}`} onClick={onClickSquare}>
      {value}
    </button>
  );
}

/* Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.null]),
}; */
