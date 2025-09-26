import { Button, Drawer } from "antd";
import "./Header.scss";
import { SunFilled, MoonFilled } from "@ant-design/icons";
import { HeaderStar } from "./HeaderStar";
import { useTheme } from "../Theme/useTheme";
import { useState } from "react";

export const Header = () => {
  const { theme, iconTheme, toggleTheme } = useTheme();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
              <Button
                className="header__burger-btn"
                onClick={showDrawer}
              ></Button>
              <Drawer
                title="Menu"
                closable={{ "aria-label": "Close Button" }}
                rootClassName="header__drawer"
                onClose={onClose}
                open={open}
              >
                <ul className="header__menu drawer">
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
                <div className="header__drawer-info">
                  <p className="header__drawer-title">My social networks</p>
                  <div className="header__drawer-social">
                    <ul className="header__drawer-list">
                      <li className="header__drawer-item">
                        <a
                          className="header__drawer-link"
                          href="https://github.com/HELLRAID-cmd/EmilGainulin"
                          target="_blank"
                        >
                          <svg
                            className="header__drawer-icon"
                            width="30"
                            height="30"
                            aria-hidden="true"
                          >
                            <use href="/public/svg/sprite.svg#icon-github"></use>
                          </svg>
                        </a>
                      </li>
                      <li className="header__drawer-item">
                        <a
                          className="header__drawer-link"
                          href="mailto:emilgainulinjob@gmail.com"
                          target="_blank"
                        >
                          <svg
                            className="header__drawer-icon"
                            width="30"
                            height="30"
                            aria-hidden="true"
                          >
                            <use href="/public/svg/sprite.svg#icon-mail"></use>
                          </svg>
                        </a>
                      </li>
                      <li className="header__drawer-item">
                        <a
                          className="header__drawer-link"
                          href="#"
                          target="_blank"
                        >
                          <svg
                            className="header__drawer-icon"
                            width="30"
                            height="30"
                            aria-hidden="true"
                          >
                            <use href="/public/svg/sprite.svg#icon-telegram"></use>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
