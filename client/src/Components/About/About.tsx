import { Card, Timeline } from "antd";
import "./About.scss";
import { skills } from "./About-skills";

export const About = () => {
  const Cards = () => {
    return (
      <>
        {skills.map((group, i) => (
          <Card key={i}>
            <Timeline
              items={group.map((item) => ({
                key: item.id,
                children: (
                  <p className="about__card-timeline-desc">{item.desc}</p>
                ),
              }))}
            ></Timeline>
          </Card>
        ))}
      </>
    );
  };

  return (
    <>
      <section className="about-sect" id="skills">
        <div className="about">
          <div className="container">
            <div className="about__wrapper">
              <h2 className="about__title">Professional skills</h2>
              <div className="about__card">
                <Cards />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
