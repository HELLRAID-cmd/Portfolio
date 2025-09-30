import { useEffect, useState } from "react";
import "./Sudoku.scss";
import { Button, Spin, Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

export const Sudoku = () => {
  const [open, setOpen] = useState(false);
  const [board, setBoard] = useState<number[][]>([]);
  const [boardCheck, setBoardCheck] = useState<number[][]>([]);
  const [isCellCorrect, setIsCellCorrect] = useState<boolean[][]>([]);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("en");

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const fetchBoard = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
      const data = await response.json();
      setBoard(data.newboard.grids[0].value);
      setBoardCheck(data.newboard.grids[0].solution);
      setIsCellCorrect(
        data.newboard.grids[0].value.map((row: number[]) => row.map((cell: number) => cell !== 0))
      );
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

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

  const handleLanguage = () => {
    setLang((prev) => (prev === "ru" ? "en" : "ru"));
  }

  return (
    <>
      {loading ? (
        <Spin
          className="sudoku-game__loading"
          indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
        />
      ) : (
        <div className="sudoku-game">
          <div className="sudoku-game__board">
            {board.map((row, rowIndex) => (
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
            ))}
          </div>
          <div className="sudoku-game__buttons">
            <Button onClick={fetchBoard} className="sudoku-game__button button">
              New Board
            </Button>
            <Button onClick={showModal} className="sudoku-game__button button">
              Rules of the game Sudoku
            </Button>
          </div>
        </div>
      )}
      <Modal
        title={lang === "en" ? "Rules of the game Sudoku" : "Правила для игры в Судоку"}
        className="sudoku-game__modal"
        open={open}
        closable={{ "aria-label": "Custom Close Button" }}
        footer={[
          <Button onClick={handleLanguage} aria-label="Перевести">
            {lang === "en" ? "En" : "Ru"}
          </Button>
        ]}
        onCancel={handleCancel}
        centered
      >
        <p>
          {lang === "en" ? "Sudoku is a 9x9 puzzle where you have to fill in the empty cells with numbers from 1 to 9 so that no numbers are repeated in a row, column, or in each small 3x3 square." : "Судоку — это головоломка размером 9x9, в которой вам нужно заполнить пустые клетки цифрами от 1 до 9 так, чтобы в строке, столбце или в каждом маленьком квадрате 3x3 цифры не повторялись."}
        </p>
      </Modal>
    </>
  );
};
