import { useState, useEffect } from "react";
import "./HeroAnimation.scss";
import { HeroGithub } from "../Hero-item/Hero-github";
import { HeroMail } from "../Hero-item/Hero-mail";
import { HeroTelegram } from "../Hero-item/Hero-telegram";

export const Animation = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState([false, false, false]);
  
  const title = "My social links";
  const links = [
    "github.com/HELLRAID-cmd",
    "emilgainulinjob@gmail.com",
    "t.me/HELLRAID1"
  ];

  // Задержка анимации
  useEffect(() => {
    const innerTimers: number[] = [];

    const timer = setTimeout(() => setShowTitle(true), 5000);
    const linksTimer = setTimeout(() => setShowLinks(true), 8000);
    // Появление списка с задержкой
    const linksVisible = setTimeout(() => {
      setVisibleLinks([true, false, false]); // Github

      innerTimers.push(
        setTimeout(() => {
          setVisibleLinks([true, true, false]); // Mail
        }, 3000)
      );

      innerTimers.push(
        setTimeout(() => {
          setVisibleLinks([true, true, true]); // Telegram
        }, 5000)
      );

    }, 10900);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(linksTimer);
      clearTimeout(linksVisible);
      innerTimers.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className="animation-1440">
      <svg
        className="hero__animation-cursor"
        width="48"
        height="48"
        aria-hidden="true"
      >
        <use
          href={`${import.meta.env.BASE_URL}svg/sprite.svg#icon-cursor`}
        ></use>
      </svg>
      <div className="animation">
        <p
          className={`animation-title ${
            showTitle ? "animation-title--visible" : ""
          }`}
        >
          {title.split("").map((letter, index) => (
            <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
          ))}
        </p>
        <ul className="animation-list">
          <HeroGithub showLinks={showLinks} links={links[0]} visible={visibleLinks[0]}/>
          <HeroMail showLinks={showLinks} links={links[1]} visible={visibleLinks[1]}/>
          <HeroTelegram showLinks={showLinks} links={links[2]} visible={visibleLinks[2]}/>
        </ul>
      </div>
    </div>
  );
};
