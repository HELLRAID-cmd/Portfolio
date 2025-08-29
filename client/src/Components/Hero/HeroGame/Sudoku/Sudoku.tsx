import { useEffect, useState } from "react";
import "./Sudoku.scss";
import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Sudoku = () => {
  const [board, setBoard] = useState<number[][]>([]);
  const [boardCheck, setBoardCheck] = useState<number[][]>([]);
  const [isCellCorrect, setIsCellCorrect] = useState<boolean[][]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBoard = async () => {
    const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
    const data = await response.json();
    setBoard(data.newboard.grids[0].value);
    setBoardCheck(data.newboard.grids[0].solution);
    setIsCellCorrect(
      data.newboard.grids[0].value.map((row) => row.map((cell) => cell !== 0))
    );
  };

  useEffect(() => {
    setLoading(false);
  });

  useEffect(() => {
    fetchBoard();
  }, []);

  const handleChange = (rowIndex: number, colIndex: number, value: string) => {
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
      const isCorrect = parseInt(value) === boardCheck[rowIndex][colIndex];
      const newIsCorrect = isCellCorrect.map((row, rIdx) =>
        row.map((cell, cIdx) =>
          rIdx === rowIndex && cIdx === colIndex ? isCorrect : cell
        )
      );
      setBoard(newBoard);
      setIsCellCorrect(newIsCorrect);
    }
  };

  return (
    <>
      <div className="sudoku-game">
        <div className="sudoku-game__board">
          {loading ? (
            <Spin
              indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
            />
          ) : (
            board.map((row, rowIndex) => (
              <div className="sudoku-game__row" key={rowIndex}>
                {row.map((cell, coIndex) => {
                  const isInputIncorrect =
                    isCellCorrect[rowIndex][coIndex] === false && cell !== 0;
                  return (
                    <input
                      type="text"
                      key={coIndex}
                      value={cell !== 0 ? cell : ""}
                      onChange={(e) =>
                        handleChange(rowIndex, coIndex, e.target.value)
                      }
                      readOnly={isCellCorrect[rowIndex][coIndex]}
                      className={`sudoku-game__cell ${
                        cell !== 0 ? "prewritten" : ""
                      } ${isInputIncorrect ? "incorrect" : ""}`}
                    />
                  );
                })}
              </div>
            ))
          )}
        </div>
        {/* <Button onClick={fetchBoard} className="sudoku-game__button">New Board</Button> */}
      </div>
    </>
  );
};
