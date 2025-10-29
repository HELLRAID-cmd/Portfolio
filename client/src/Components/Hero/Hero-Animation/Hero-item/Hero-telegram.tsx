import { HeroPreCode } from "./Hero-pre-code";
import type { HeroProps } from "./Hero-types";

export const HeroTelegram = ({showLinks, links, visible}: HeroProps) => {
  return (
    <li className="animation-item">
      <HeroPreCode showLinks={showLinks} links={links} delay={6000}/>
      <a
        href="https://t.me/HELLRAID1"
        target="_blank"
        className={`animation-link ${visible ? "animation-link--active" : ""}`}
      >
        <svg
          className="animation-icon"
          width="30"
          height="30"
          aria-hidden="true"
        >
          <use
            href={`${import.meta.env.BASE_URL}svg/sprite.svg#icon-telegram`}
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
          <span className="animation-logo__name">HELLRAID1</span>
        </span>
      </a>
    </li>
  );
};
