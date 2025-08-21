import { Button } from "antd";
import "./Header.scss";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useState } from "react";

export const Header = () => {
  const [dark, setDark] = useState(false);

  const toggleTheme = () => {
    setDark(!dark);
  }
  
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a href="index.html" className="header__icon-link">
          <svg
            className="header__icon"
            width="64"
            height="64"
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
          <div className="header__theme">
            <Button className={`header__theme-button ${dark ? "active" : ""}`} onClick={toggleTheme}>
              {dark ? <MoonFilled /> : <SunFilled />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
