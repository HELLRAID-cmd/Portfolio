import { useEffect, useState } from "react";
import "./Sudoku.scss";

export const Sudoku = () => {
  const [board, setBoard] = useState<number[][]>([]);
  const [boardCheck, setBoardCheck] = useState([]);
  const [isCellCorrect, setIsCellCorrect] = useState([]);

  const fetchBoard = async () => {
    const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
    const data = await response.json();
    setBoard(data.newboard.grids[0].value);
  };

  useEffect(() => {
    fetchBoard();
  }, []);

  const handleChange = (rowIndex, colIndex, value: string) => {
    if (/^[1-9]?$/.test(value)) {
      const newBoard = board.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex
            ? value
              ? parseInt(value)
              : 0
            : cell
        )
      );
      const isCorrect = parseInt(value) === boardCheck
    }
  };

  return (
    <>
      <div className="sudoku">
        <div className="sudoku-board">
          {board.map((row, rowIndex) => (
            <div className="sudoku-row" key={rowIndex}>
              {row.map((cell, coIndex) => {
                const isInputIncorrect =
                  isCellCorrect[rowIndex][coIndex] === false && cell !== 0;
                return (
                  <input
                    type="text"
                    key={coIndex}
                    value={cell !== 0 ? cell : ""}
                    onTouchEndCapture={(e) =>
                      handleChange(rowIndex, coIndex, e.target.value)
                    }
                    readOnly={isCellCorrect[rowIndex][coIndex]}
                    className={`sudoku-cell ${cell !== 0 ? "prewritten" : ""} ${
                      isInputIncorrect ? "incorrect" : ""
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
