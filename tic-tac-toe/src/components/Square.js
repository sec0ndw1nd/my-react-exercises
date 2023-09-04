export default function Square({ value, onClickSquare }) {
  return (
    <button className="square" onClick={onClickSquare}>
      {value}
    </button>
  );
}

/* Square.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.null]),
}; */
