import { Button } from "antd";
import "./Header.scss";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { HeaderStar } from "./HeaderStar";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [iconTheme, setIconTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.add(theme);
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(theme);
  }, [theme]);
 
  const toggleTheme = () => {
    setTimeout(() => {
      setIconTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, 200);

    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a href="index.html" className="header__icon-link">
            <svg
              className="header__icon"
              width="44"
              height="44"
              aria-hidden="true"
            >
              <use href="/public/svg/sprite.svg#icon-user"></use>
            </svg>
          </a>
          <ul className="header__menu">
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#!">
                About
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#!">
                Skills
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#!">
                Portfolio
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#!">
                Work Experience
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#!">
                Contacts
              </a>
            </li>
          </ul>
          <div className="header__theme" onClick={toggleTheme}>
            <Button
              className={`header__theme-button ${
                theme === "dark" ? "active" : ""
              }`}
            >
              {iconTheme === "dark" ? <SunFilled className="header__theme-icon" /> : <MoonFilled className="header__theme-icon"/>}
            </Button>
            <HeaderStar className={`header__theme-icon-star ${iconTheme}`}/>
          </div>
        </div>
      </div>
    </header>
  );
};
