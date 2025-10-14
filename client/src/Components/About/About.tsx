import { Cards } from "./About-Card";
import "./About.scss";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    const scrollItems: NodeListOf<Element> =
      document.querySelectorAll(".about__title");

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
        threshold: .9, // 90% элемента
      }
    );

    scrollItems.forEach((item) => observer.observe(item));

    return () => {
      scrollItems.forEach((item) => observer.unobserve(item));
      observer.disconnect();
    };
  }, []);

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
