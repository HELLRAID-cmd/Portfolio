import { Button } from "antd";

type GameInfoProps = {
  status: React.ReactNode;
  winnerState: boolean;
  onReset: () => void; 
}

const GameInfo = ({status, onReset, winnerState}: GameInfoProps) => {
  return (
    <div className="game-info">
      {status}
      <Button onClick={onReset} className={`game-info__button button ${winnerState ? "game-info__button--winner" : ""}` }aria-label="reset game">Reset game</Button>
    </div>
  )
}

export default GameInfo;