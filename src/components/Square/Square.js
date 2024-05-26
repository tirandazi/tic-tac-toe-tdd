const Square = ({ value, onSquareClick }) => {
  return (
    <button className="square" onClick={onSquareClick} data-testId="ticButton">
      {value}
    </button>
  );
};

export default Square;
