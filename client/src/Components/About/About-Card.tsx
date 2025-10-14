import { skills } from "./About-skills";
import { Card, Timeline } from "antd";

export const Cards = () => {
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