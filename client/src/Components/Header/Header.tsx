import { Button } from "antd";
import "./Header.scss";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";

export const Header = () => {
  const [dark, setDark] = useState(true);
  const [icon, setIcon] = useState(<MoonFilled style={{color: "#000"}} />);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    document.body.classList.add(theme);
  }, [])

  const toggleTheme = () => {
    setDark((prev) => {
      setTimeout(() => {
        document.body.classList.toggle("dark", !prev);
      }, 200);
      return !prev;
    });

    setTimeout(() => {
      setIcon(dark ? <SunFilled style={{color: "#000"}} /> : <MoonFilled style={{color: "#000"}} />);
      setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, 200);
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
          <div className={`header__theme ${theme === "light" ? "header__theme-light" : "header__theme-dark"}`} onClick={toggleTheme}>
            <Button className={`header__theme-button ${dark ? "active" : ""}`}>
              {icon}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
