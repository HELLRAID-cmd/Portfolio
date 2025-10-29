import { useState, useEffect } from "react";
import "./Hero.scss";
import { Animation } from "./Hero-Animation/animation/HeroAnimation";

export const Hero = () => {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  return (
    <>
      <section className="hero-sect" id="about">
        <div className="hero">
          <div className="container">
            <div className="hero__wrapper">
              <div className="hero__text">
                <div className="hero__text-wrapper">
                  <h1
                    className="hero__text-title"
                    data-text="Hello! My name is Emil Gainulin"
                  >
                    Hello! My name is Emil Gainulin
                  </h1>
                  <h2 className="hero__text-desc">This is what I can do.</h2>
                </div>
                <a className="hero__text-link link" href="#project">
                  Check!
                </a>
              </div>
              <div className="hero__animation">
                <Animation />
                {/* {width >= 1440 && <Animation1440 />} */}
                {/* {width < 1440 && width >= 1024 && <Animate1024 />}
                {width < 1024 && width >= 764 && <Animate764 />}
                {width < 764 && <Animate360 />} */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
