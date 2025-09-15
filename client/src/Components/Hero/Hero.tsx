import { ArrowDownOutlined } from "@ant-design/icons";
import { Typography, Button } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import { Sudoku } from "./HeroGame/Sudoku/Sudoku";
import { HeroXO } from "./HeroGame/X-O/X-O";
import "./Hero.scss";
import { useState } from "react";

export const Hero = () => {
  const [active, setActive] = useState("");
  
  return (
    <>
      <section className="hero-sect" id="about">
        <div className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <Typography.Paragraph className="hero__text">
                <Typography.Paragraph className="hero__text-wrapper">
                  <Typography.Title
                    level={1}
                    className="hero__text-wrapper-title"
                    data-text="Hello! My name is Emil Gaynulin"
                  >
                    Hello! My name is <br /> Emil Gaynulin
                  </Typography.Title>
                  <Typography.Title
                    level={2}
                    style={{ margin: 0 }}
                    className="hero__text-wrapper-desc"
                    data-text="This is what I can do."
                  >
                    This is what I can do.
                  </Typography.Title>
                </Typography.Paragraph>
                <Button className="hero__text-button button">Check!</Button>
              </Typography.Paragraph>

              <Typography.Paragraph className="hero__game">
                <div className="hero__game-links">
                  <Link to="/" onClick={() => setActive("sudoku")} className={`hero__game-link link ${active === "sudoku" ? "sudoku" : ""}`}>Sudoku</Link>
                  <Link to="/HeroXO" onClick={() => setActive("x-o")} className={`hero__game-link link ${active === "x-o" ? "x-o" : ""}`}>X-O</Link>
                </div>

                <div className="hero__game-inner">
                <Routes>
                  <Route path="/" element={<Sudoku />} />
                  <Route path="/HeroXO" element={<HeroXO />} />
                </Routes>
                </div>

              </Typography.Paragraph>

              <a href="#about" className="hero__wrapper-link" aria-label="Scroll down">
                <ArrowDownOutlined
                  className="hero__wrapper-link-arrow"
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
