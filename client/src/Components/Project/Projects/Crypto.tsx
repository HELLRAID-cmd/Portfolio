import { Card } from "antd";
import "../Project.scss";

const Crypto = () => {
  return (
    <Card className="project__card project__card--crypto">
      <div className="project__card-info project-hidden">
        <h3 className="project__card-info-title">Crypto Project</h3>
        <span className="project__card-info-date">22.08.2025</span>
      </div>
      <picture className="project__card-picture">
        <source
          media="(max-width: 1000px)"
          srcSet={`${import.meta.env.BASE_URL}img/project/cryptoProject@2x.jpg`}
          width={200}
        />
        <img
          className="project__card-picture-img"
          src={`${import.meta.env.BASE_URL}img/project/cryptoProject.jpg`}
          width={500}
          alt="img"
        />
      </picture>
      <div className="project__card-inner">
        <a
          className="project__card-inner-title link-title"
          href="https://github.com/HELLRAID-cmd/ProjectCrypt"
          target="_blank"
        >
          Crypto Project
        </a>
        <div className="project__card-text">
          <p className="project__card-text-desc">
            A&nbsp;small app for practicing working with state and calculations.
            The user can &laquo;buy&raquo; cryptocurrency at&nbsp;any price and
            quantity, and then track how much he&nbsp;earned or&nbsp;lost.
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

export default Crypto;
