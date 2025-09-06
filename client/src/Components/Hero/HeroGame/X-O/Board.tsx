import Square from "./Square";
import { EllipseXO, XXO } from "./icon/icon-x-o";

type BoardProps = {
  squares: React.ReactNode[];
  onClick: (index: number) => void;
};

const Board = ({ squares, onClick }: BoardProps) => {
  const renderSquare = (index: number) => {
    return (
      <Square
        value={
          squares[index] === "X" ? (
            <XXO />
          ) : squares[index] === "O" ? (
            <EllipseXO />
          ) : null
        }
        onClick={() => onClick(index)}
      />
    );
  };

  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
