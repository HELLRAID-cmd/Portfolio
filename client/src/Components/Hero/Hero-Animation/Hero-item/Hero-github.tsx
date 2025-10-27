import { HeroPreCode } from "./Hero-pre-code";
import type { HeroProps } from "./Hero-types";

export const HeroGithub = ({ showLinks, links, visible }: HeroProps) => {
  return (
    <li className="animation-item animation-item--active">
      <HeroPreCode showLinks={showLinks} links={links} delay={0} />
      <a
        href="https://github.com/HELLRAID-cmd/EmilGainulin"
        target="_blank"
        className={`animation-link ${visible ? "animation-link--active" : ""}`}
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
  );
};
