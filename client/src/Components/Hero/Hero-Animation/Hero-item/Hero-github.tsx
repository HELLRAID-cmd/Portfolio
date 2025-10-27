type HeroGithubProps = {
  showLinks: boolean;
  links: string[];
}

export const HeroGithub = ({showLinks, links}: HeroGithubProps) => {
  return (
    <li className="animation-item">
      <pre
        className={`animation-code ${
          showLinks ? "animation-code--visible" : ""
        }`}
      >
        {links[0].split("").map((letter, index) => (
          <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
        ))}
      </pre>
      <a
        href="https://github.com/HELLRAID-cmd/EmilGainulin"
        target="_blank"
        className={`animation-link ${showLinks ? "" : "animation-link--first"}`}
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
