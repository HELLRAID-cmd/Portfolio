import { Card, Typography } from "antd";
import "./Project.scss";

export const Project = () => {
  return (
    <>
      <section className="project-sect" id="project">
        <div className="project">
          <div className="container">
            <div className="project__wrapper">
              <Typography.Title level={3} className="about__title">
                My Portfolio
              </Typography.Title>

              <Card className="project__card">
                <picture>
                  <source
                    media="(max-width: 1000px)"
                    src="/img/project/project.jpg"
                    width={200}
                  />
                  <img
                    className="project__card-img"
                    src="./public/img/project/project.jpg"
                    width={200}
                    alt="img"
                  />
                </picture>
                <div className="project__card-inner">
                  <p className="project__card-inner-title">
                    Briaton Final Work
                  </p>
                  <p className="project__card-inner-desc">
                    The final assignment for the Skillbox courses includes
                    an&nbsp;online store of&nbsp;various types
                    of&nbsp;chandeliers. Rewritten in&nbsp;TS + React.
                  </p>
                  <p className="project__card-inner-technologies">
                    Technologies: TS, React, Vite, Scss, Just Validate
                  </p>
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
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
