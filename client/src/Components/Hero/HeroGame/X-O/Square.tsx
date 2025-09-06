import { Button } from "antd";

type SquareProps = {
  value: React.ReactNode;
  onClick: () => void; 
}

const Square = ({value, onClick}: SquareProps) => {
  
  return (
    <Button className="square-button" onClick={onClick}>
      {value}
    </Button>
  )
}

export default Square;