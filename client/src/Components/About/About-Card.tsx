import { useEffect } from "react";
import { skills } from "./About-skills";
import { Card, Timeline } from "antd";

export const Cards = () => {
  useEffect(() => {
    const scrollCard: NodeListOf<Element> =
      document.querySelectorAll(".about__card-card");
      const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("visible");
          }
        });
      },
      {
        threshold: .2, // 20% элемента
      }
    );

    scrollCard.forEach((item) => observer.observe(item));

    return () => {
      scrollCard.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);
  
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