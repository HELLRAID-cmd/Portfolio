import { ArrowDownOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import "./Hero.scss";

export const Hero = () => {
  return (
    <>
      <section className="hero-sect">
        <div className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <Typography.Paragraph className="hero__text">
                <Typography.Paragraph className="hero__text-wrapper">
                  <Typography.Title
                    level={1}
                    className="hero__text-wrapper-title"
                  >
                    Hello! My name is <br /> Emil Gaynulin
                  </Typography.Title>
                  <Typography.Title
                    level={2}
                    style={{ margin: 0 }}
                    className="hero__text-wrapper-desc"
                  >
                    This is what I can do.
                  </Typography.Title>
                </Typography.Paragraph>
                <Button className="hero__text-button">Check!</Button>
              </Typography.Paragraph>

              <Typography.Paragraph className="hero__game">
                <div className="hero__game-buttons">
                  <Button className="hero__game-button sudoku">Sudoku</Button>
                  <Button className="hero__game-button x-o">X-O</Button>
                  <Button className="hero__game-button snake">Snake</Button>
                </div>
              </Typography.Paragraph>

              <Button className="hero__wrapper-button" aria-label="Scroll down">
                <ArrowDownOutlined
                  className="hero__wrapper-button-arrow"
                  height={40}
                />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
