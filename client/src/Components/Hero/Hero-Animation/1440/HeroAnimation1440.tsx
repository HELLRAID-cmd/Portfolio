import { useState, useEffect } from "react";
import "./HeroAnimation1440.scss";

export const Animation1440 = () => {
  const [showTitle, setShowTitle] = useState(false);
  const title = "My Social Links";

  useEffect(() => {
    const timer = setTimeout(() => setShowTitle(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="animation-1440">
      <svg
        className="hero__animation-cursor"
        width="48"
        height="48"
        aria-hidden="true"
      >
        <use
          href={`${import.meta.env.BASE_URL}svg/sprite.svg#icon-cursor`}
        ></use>
      </svg>
      <div className="animation">
        <p className={`animation-title ${showTitle ? "animation-title--visible" : ""}`}>
          {title.split("").map((letter, index) => (
          <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
        ))}
        </p>
        <ul className="animation-list">
          <li className="animation-item">
            <a
              href="https://github.com/HELLRAID-cmd/EmilGainulin"
              target="_blank"
              className="animation-link"
            >
              <svg
                className="animation-link__icon"
                width="30"
                height="30"
                aria-hidden="true"
              >
                <use
                  href={`${import.meta.env.BASE_URL}svg/sprite.svg#icon-github`}
                ></use>
              </svg>
              <span className="animation-span">GitHub</span>
              <span className="animation-logo">
                <img
                  src={`${import.meta.env.BASE_URL}img/hero/hero-cat.jpg`}
                  alt="github logo"
                  width={40}
                  className="animation-logo__img"
                />
                <span className="animation-logo__name">HELLRAID-cmd</span>
              </span>
            </a>
          </li>
          <li className="animation-item">
            <a
              href="mailto:emilgainulinjob@gmail.com"
              target="_blank"
              className="animation-link"
            >
              <svg
                className="animation-icon"
                width="30"
                height="30"
                aria-hidden="true"
              >
                <use
                  href={`${import.meta.env.BASE_URL}svg/sprite.svg#icon-mail`}
                ></use>
              </svg>
              <span className="animation-span">Mail</span>
              <span className="animation-logo">
                <img
                  src={`${import.meta.env.BASE_URL}img/hero/hero-cat.jpg`}
                  alt="github logo"
                  width={40}
                  className="animation-logo__img"
                />
                <span className="animation-logo__name">Emil Gainulin</span>
              </span>
            </a>
          </li>
          <li className="animation-item">
            <a
              href="https://t.me/HELLRAID1"
              target="_blank"
              className="animation-link"
            >
              <svg
                className="animation-icon"
                width="30"
                height="30"
                aria-hidden="true"
              >
                <use
                  href={`${
                    import.meta.env.BASE_URL
                  }svg/sprite.svg#icon-telegram`}
                ></use>
              </svg>
              <span className="animation-span">Telegram</span>
              <span className="animation-logo">
                <img
                  src={`${import.meta.env.BASE_URL}img/hero/hero-telegram.jpg`}
                  alt="github logo"
                  width={40}
                  className="animation-logo__img"
                />
                <span className="animation-logo__name">HELLRAID</span>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
