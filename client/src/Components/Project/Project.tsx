import { Card } from "antd";
import "./Project.scss";
import "../../styles/_link.scss";

export const Project = () => {
  return (
    <>
      <section className="project-sect" id="project">
        <div className="project">
          <div className="container">
            <div className="project__wrapper">
              <h2 className="project__title">My Project</h2>
              <div className="project__cards">
                <Card className="project__card">
                  <div className="project__card-info project-hidden">
                    <h3 className="project__card-info-title">Briaton Final Work</h3>
                    <span className="project__card-info-date">22.05.2025</span>
                  </div>
                  <picture className="project__card-picture">
                    <source
                      media="(max-width: 1000px)"
                      src="/img/project/project.jpg"
                      width={200}
                    />
                    <img
                      className="project__card-picture-img"
                      src="./public/img/project/project.jpg"
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
                        an&nbsp;online store of&nbsp;various types
                        of&nbsp;chandeliers. Rewritten in&nbsp;TS + React.
                      </p>
                      <p className="project__card-text-technologies">
                        Technologies: React, TS, Scss, Vite, Just Validate.
                      </p>
                    </div>
                    <div className="project__card-technologies">
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/React.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/TypeScript.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/Sass.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/Vite.js.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/JustValidate.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="project__card">
                  <div className="project__card-info project-hidden">
                    <h3 className="project__card-info-title">Crypto Project</h3>
                    <span className="project__card-info-date">22.08.2025</span>
                  </div>
                  <picture className="project__card-picture">
                    <source
                      media="(max-width: 1000px)"
                      srcSet="./public/img/project/cryptoProject@2x.jpg"
                      width={200}
                    />
                    <img
                      className="project__card-picture-img"
                      src="./public/img/project/cryptoProject.jpg"
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
                      Crypto Project
                    </a>
                    <div className="project__card-text">
                      <p className="project__card-text-desc">
                        A&nbsp;small app for practicing working with state and
                        calculations. The user can &laquo;buy&raquo;
                        cryptocurrency at&nbsp;any price and quantity, and then
                        track how much he&nbsp;earned or&nbsp;lost.
                      </p>
                      <p className="project__card-text-technologies">
                        Technologies: React, TS, Scss, Vite, Antd.
                      </p>
                    </div>
                    <div className="project__card-technologies">
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/React.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/TypeScript.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/Sass.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/Vite.js.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                      <div className="project__card-technologies-img">
                        <img
                          src="./public/img/project/icons/AntD.png"
                          width={35}
                          alt="img"
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
