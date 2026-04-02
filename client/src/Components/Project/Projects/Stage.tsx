import { Card } from "antd";
import "../Project.scss";

const Stage = () => {
  return (
    <Card className="project__card project__card--monster">
      <div className="project__card-info project-hidden">
        <h3 className="project__card-info-title">Stage Task</h3>
        <span className="project__card-info-date">31.03.2026</span>
      </div>
      <picture className="project__card-picture">
        <source
          media="(max-width: 1000px)"
          srcSet={`${import.meta.env.BASE_URL}img/project/stage.jpg`}
          width={200}
        />
        <img
          className="project__card-picture-img"
          src={`${import.meta.env.BASE_URL}img/project/stage.jpg`}
          width={500}
          alt="img"
        />
      </picture>
      <div className="project__card-inner">
        <a
          className="project__card-inner-title link-title"
          href="https://github.com/HELLRAID-cmd/StageTask"
          target="_blank"
        >
          Stage Task
        </a>
        <div className="project__card-text">
          <p className="project__card-text-desc">
            A&nbsp;task tracking app similar to&nbsp;Trello. It&nbsp;allows you
            to&nbsp;create projects with tasks, which are saved
            in&nbsp;LocalStorage.
          </p>
          <p className="project__card-text-technologies">
            Technologies: React, TS, Scss, Vite, Antd, Bootstrap, dnd-kit, html2canvas.
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
          <div className="project__card-technologies-img">
            <img
              src={`${import.meta.env.BASE_URL}img/project/icons/Bootstrap.png`}
              width={35}
              alt="img"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Stage;
