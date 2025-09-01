import { useState } from "react";
import { Button, Modal } from "antd";
// import { LoadingOutlined } from "@ant-design/icons";
import "./X-O.scss";

export const HeroXO = () => {
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="x-o-game">
        <div className="x-o-game__board">
          
        </div>
        <div className="x-o-game__buttons">
          <Button className="x-o-game__button button">
            New Board
          </Button>
          <Button onClick={showModal} className="x-o-game__button button">
            Rules of the game x-o
          </Button>
        </div>
      </div>
      <Modal
        title="Rules of the game x-o"
        className="x-o-game__modal"
        open={open}
        closable={{ "aria-label": "Custom Close Button" }}
        footer={[]}
        onCancel={handleCancel}
        centered
      >
        <p>
          Players take turns placing a cross or a zero in an empty 3x3 cell. The winner is the first to make a line of three of their symbols horizontally, vertically or diagonally. If the field is filled and no one has collected three in a row, it's a draw.
        </p>
      </Modal>
    </>
  );
}