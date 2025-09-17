import { Button } from "antd";
import "./Header.scss";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { HeaderStar } from "./HeaderStar";
import { useTheme } from "../Theme/useTheme";

export const Header = () => {
  const { theme, iconTheme, toggleTheme } = useTheme();

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
              <a className="header__menu-item-link" href="#about">
                About
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#skills">
                Skills
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#project">
                Project
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-item-link" href="#contacts">
                Contacts
              </a>
            </li>
          </ul>
          <div className="header__buttons">
            <div className="header__theme" onClick={toggleTheme}>
              <Button
                className={`header__theme-button ${
                  theme === "dark" ? "active" : ""
                }`}
              >
                {iconTheme === "dark" ? (
                  <SunFilled className="header__theme-icon" />
                ) : (
                  <MoonFilled className="header__theme-icon" />
                )}
              </Button>
              <HeaderStar className={`header__theme-icon-star ${iconTheme}`} />
            </div>
            <div className="header__burger">
              <Button className="header__burger-btn"></Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
