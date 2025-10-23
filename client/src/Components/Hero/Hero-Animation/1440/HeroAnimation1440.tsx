import "./HeroAnimation1440.scss"

export const Animation1440 = () => {
  return (
    <div className="hero__animation-1440">
      <svg
        className="hero__animation-icon"
        width="48"
        height="48"
        aria-hidden="true"
      >
        <use
          href={`${import.meta.env.BASE_URL}svg/sprite.svg#icon-cursor`}
        ></use>
      </svg>
      <div className="hero__animation-box">
        
      </div>
    </div>
  );
};
