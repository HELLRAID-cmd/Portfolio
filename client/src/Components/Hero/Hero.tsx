import { ArrowDownOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { HeroSudoku } from "./HeroGame/HeroSudoku";
import { HeroXO } from "./HeroGame/HeroXO";
import { HeroSnake } from "./HeroGame/HeroSnake";
import "./Hero.scss";
import { useState } from "react";

export const Hero = () => {
  const [active, setActive] = useState("");
  
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
                <div className="hero__game-links">
                  <Link to="/" onClick={() => setActive("sudoku")} className={`hero__game-link ${active === "sudoku" ? "sudoku" : ""}`}>Sudoku</Link>
                  <Link to="/HeroXO" onClick={() => setActive("x-o")} className={`hero__game-link ${active === "x-o" ? "x-o" : ""}`}>X-O</Link>
                  <Link to="/HeroSnake" onClick={() => setActive("snake")} className={`hero__game-link ${active === "snake" ? "snake" : ""}`}>Snake</Link>
                </div>

                <Routes>
                  <Route path="/" element={<HeroSudoku />} />
                  <Route path="/HeroXO" element={<HeroXO />} />
                  <Route path="/HeroSnake" element={<HeroSnake />} />
                </Routes>
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
