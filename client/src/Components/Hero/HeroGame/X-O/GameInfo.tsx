type GameInfoProps = {
  status: React.ReactNode;
}

const GameInfo = ({status}: GameInfoProps) => {
  return (
    <div className="game-info">
      {status}
    </div>
  )
}

export default GameInfo;