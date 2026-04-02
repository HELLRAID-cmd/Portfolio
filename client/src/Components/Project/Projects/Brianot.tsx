import { Card } from "antd";
import "../Project.scss";

const Briaton = () => {
  return (
    <Card className="project__card project__card--briaton">
      <div className="project__card-info project-hidden">
        <h3 className="project__card-info-title">Briaton Final Work</h3>
        <span className="project__card-info-date">22.05.2025</span>
      </div>
      <picture className="project__card-picture">
        <source
          media="(max-width: 1000px)"
          srcSet={`${import.meta.env.BASE_URL}img/project/project@2x.jpg`}
          width={200}
        />
        <img
          className="project__card-picture-img"
          src={`${import.meta.env.BASE_URL}img/project/project.jpg`}
          width={500}
          alt="img"
        />
      </picture>
      <div className="project__card-inner">
        <a
          className="project__card-inner-title link-title"
          href="https://github.com/HELLRAID-cmd/Briaton---finalWork"
          target="_blank"
        >
          Briaton Final Work
        </a>
        <div className="project__card-text">
          <p className="project__card-text-desc">
            The final assignment for the Skillbox courses includes
            an&nbsp;online store of&nbsp;various types of&nbsp;chandeliers.
            Rewritten in&nbsp;TS + React.
          </p>
          <p className="project__card-text-technologies">
            Technologies: React, TS, Scss, Vite, Just Validate.
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
              src={`${
                import.meta.env.BASE_URL
              }img/project/icons/JustValidate.png`}
              width={35}
              alt="JustValidate"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Briaton;
