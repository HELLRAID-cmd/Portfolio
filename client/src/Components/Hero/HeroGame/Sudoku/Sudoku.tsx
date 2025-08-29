import { useState } from "react";

export const Sudoku = () => {
  const [board, setBoard] = useState([]);
  const [boardChack, setBoardCheck] = useState([]);

  const fetchBoard = async () => {
    const response = await fetch("https://sudoku-api.vercel.app/api/dosuku");
    const data = await response.json();
    setBoard(data)
  }
  
  
  return (
    <>
      <h1>Sudoku</h1>
    </>
  )
}