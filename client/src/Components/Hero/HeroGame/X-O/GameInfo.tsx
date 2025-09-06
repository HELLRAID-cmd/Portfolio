import { Button } from "antd";

type GameInfoProps = {
  status: React.ReactNode;
  onReset: () => void; 
}

const GameInfo = ({status, onReset}: GameInfoProps) => {
  return (
    <div className="game-info">
      <div>{status}</div>
      <Button onClick={onReset}></Button>
    </div>
  )
}

export default GameInfo;