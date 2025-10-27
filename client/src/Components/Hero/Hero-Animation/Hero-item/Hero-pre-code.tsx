import { useEffect, useState } from "react";
import type { HeroProps } from "./Hero-types";

export const HeroPreCode = ({showLinks, links, delay = 0}: HeroProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!showLinks) return;

    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [showLinks, delay]);

    useEffect(() => {
    if (visible) {
      const hideTimer = setTimeout(() => setVisible(false), links.length * 115);
      return () => clearTimeout(hideTimer);
    }
  }, [visible, links]);

  return (
    <pre
      className={`animation-code ${visible ? "animation-code--visible" : "animation-code--disable"}`}
    >
      {links.split("").map((letter, index) => (
        <span key={index}>{letter === " " ? "\u00A0" : letter}</span>
      ))}
    </pre>
  );
};
