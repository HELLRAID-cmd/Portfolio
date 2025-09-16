import { ArrowDownOutlined } from "@ant-design/icons";
import { Button } from "antd";
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
              <div className="hero__text">
                <div className="hero__text-wrapper">
                  <h1 className="hero__text-title" data-text="Hello! My name is Emil Gaynulin">Hello! My name is <br /> Emil Gaynulin</h1>
                  <h2 className="hero__text-desc" data-text="This is what I can do.">This is what I can do.</h2>
                </div>
                <Button className="hero__text-button button">Check!</Button>
              </div>
              <div className="hero__game">
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
