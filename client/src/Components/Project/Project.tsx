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
                  <img className="project__card-img" src="https://fotorelax.ru/wp-content/uploads/2020/12/20201227-Photos-of-cats-03_1-min.jpg" width={200} alt="img" />
                  <div className="project__card-inner">
                    <p className="project__card-inner-title">
                      title
                    </p>
                    <div className="project__card-inner-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sit quam eligendi tempora vel cumque illum inventore unde voluptatum ipsum?</div>
                    <div className="project__card-technologies">
                      <img className="project__card-technologies-img" src="https://fotorelax.ru/wp-content/uploads/2020/12/20201227-Photos-of-cats-03_1-min.jpg" width={40} alt="technologies" />
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
