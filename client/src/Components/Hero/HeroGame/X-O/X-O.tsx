import { useState } from "react";
import { Button, Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
// import { LoadingOutlined } from "@ant-design/icons";
import "./X-O.scss";
import Board from "./Board";
import GameInfo from "./GameInfo";
// import { EllipseXO, XXO } from "./icon/icon-x-o";

const calculateWinner = (squares: (string | null)[]) => {
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
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    } 
  }
  return null;
} 

export const HeroXO = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lang, setLang] = useState("en");
  const [squares, setSquares] = useState<(string | null)[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (index: number) => {
    const newSquares = squares.slice();

    if(calculateWinner(newSquares) || newSquares[index]) {
      return;
    }

    newSquares[index] = xIsNext ? "X" : "O";
    setSquares(newSquares);

    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squares);
  let status: React.ReactNode;

  if (winner) {
    status = <>Winner {winner}</>
  } else {
    status = <>Next player {xIsNext ? "X" : "0"}</>
  }

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleLanguage = () => {
    setLang((prev) => (prev === "ru" ? "en" : "ru"));
  };

  return (
    <>
      {loading ? (
        <Spin
          className="x-o-game__loading"
          indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />}
        />
      ) : (
        <div className="x-o-game">
          <div className="x-o-game__board">
            <Board squares={squares} onClick={handleClick}/>
            <GameInfo status={status} onReset={resetGame}/>
          </div>
          <div className="x-o-game__buttons">
            <Button className="x-o-game__button button">New Board</Button>
            <Button onClick={showModal} className="x-o-game__button button">
              Rules of the game x-o
            </Button>
          </div>
        </div>
      )}
      <Modal
        title={
          lang === "en" ? "Rules of the game x-o" : "Правила для игры в X-0"
        }
        className="x-o-game__modal"
        open={open}
        closable={{ "aria-label": "Custom Close Button" }}
        footer={[
          <Button onClick={handleLanguage} aria-label="Перевести">
            {lang === "en" ? "En" : "Ru"}
          </Button>,
        ]}
        onCancel={handleCancel}
        centered
      >
        <p>
          {lang === "en"
            ? "Players take turns placing a cross or a zero in an empty 3x3 cell. The winner is the first to make a line of three of their symbols horizontally, vertically or diagonally. If the field is filled and no one has collected three in a row, it's a draw."
            : "Игроки по очереди ставят крестик или нолик в пустую клетку 3x3. Побеждает тот, кто первым выстроит ряд из трёх своих символов по горизонтали, вертикали или диагонали. Если поле заполнено и никто не собрал три крестика подряд, объявляется ничья."}
        </p>
      </Modal>
    </>
  );
};
