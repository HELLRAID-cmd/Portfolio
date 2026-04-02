import { Card } from "antd";
import "../Project.scss";

const Monster = () => {
  return (
    <Card className="project__card project__card--monster">
      <div className="project__card-info project-hidden">
        <h3 className="project__card-info-title">Tap-Tap-MonsterHunter</h3>
        <span className="project__card-info-date">22.12.2025</span>
      </div>
      <picture className="project__card-picture">
        <source
          media="(max-width: 1000px)"
          srcSet={`${import.meta.env.BASE_URL}img/project/monster@2x.jpg`}
          width={200}
        />
        <img
          className="project__card-picture-img"
          src={`${import.meta.env.BASE_URL}img/project/monster.jpg`}
          width={500}
          alt="img"
        />
      </picture>
      <div className="project__card-inner">
        <a
          className="project__card-inner-title link-title"
          href="https://github.com/HELLRAID-cmd/Tap-Tap-MonsterHunter"
          target="_blank"
        >
          Tap-Tap-MonsterHunter
        </a>
        <div className="project__card-text">
          <p className="project__card-text-desc">
            A&nbsp;short tapping game inspired by&nbsp;Tap Titans&nbsp;2. You
            can play the game in&nbsp;the standard mode or&nbsp;try the demo
            mode. After defeating the final opponent, you can view your stats.
          </p>
          <p className="project__card-text-technologies">
            Technologies: React, TS, Scss, Vite, Antd.
          </p>
        </div>
        <div className="project__card-technologies">
          <div className="project__card-technologies-img">
            <img
              src={`${import.meta.env.BASE_URL}img/project/icons/React.png`}
              width={35}
              alt="React"
            />
          </div>
          <div className="project__card-technologies-img">
            <img
              src={`${
                import.meta.env.BASE_URL
              }img/project/icons/TypeScript.png`}
              width={35}
              alt="TypeScript"
            />
          </div>
          <div className="project__card-technologies-img">
            <img
              src={`${import.meta.env.BASE_URL}img/project/icons/Sass.png`}
              width={35}
              alt="Sass"
            />
          </div>
          <div className="project__card-technologies-img">
            <img
              src={`${import.meta.env.BASE_URL}img/project/icons/Vite.js.png`}
              width={35}
              alt="Vite"
            />
          </div>
          <div className="project__card-technologies-img">
            <img
              src={`${import.meta.env.BASE_URL}img/project/icons/AntD.png`}
              width={35}
              alt="img"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Monster;
