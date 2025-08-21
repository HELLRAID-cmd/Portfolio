import { Button } from "antd";
import "./Header.scss";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

export const Header = () => {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.classList.add("dark");
  }, [])

  const toggleTheme = () => {
    setDark((prev) => {
      document.body.classList.toggle("dark", !prev);
      return !prev;
    });
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
                Work Experience
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#!">
                Contacts
              </a>
            </li>
          </ul>
          <div className={`header__theme ${!dark ? "header__theme-light" : ""}`} onClick={toggleTheme}>
            <Button className={`header__theme-button ${dark ? "active" : ""}`}>
              {dark ? <MoonFilled style={{color: "#000"}} /> : <SunFilled style={{color: "#000"}} />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
