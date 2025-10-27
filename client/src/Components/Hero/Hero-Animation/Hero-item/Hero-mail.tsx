import { HeroPreCode } from "./Hero-pre-code";
import type { HeroProps } from "./Hero-types";

export const HeroMail = ({showLinks, links, visible}: HeroProps) => {
  return (
    <li className="animation-item">
      <HeroPreCode showLinks={showLinks} links={links} delay={3000}/>
      <a
        href="mailto:emilgainulinjob@gmail.com"
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
  );
};
