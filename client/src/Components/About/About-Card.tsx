import { useAnimated } from "../UseHook/useAnimated";
import { skills } from "./About-skills";
import { Card, Timeline } from "antd";

export const Cards = () => {
  useAnimated(".about__card-card");
  useAnimated(".ant-timeline-item");

  return (
    <>
      {skills.map((group, i) => (
        <Card key={i} className="about__card-card">
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
