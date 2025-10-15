import { useEffect } from "react";

export const useAnimated = (className: string) => {
  useEffect(() => {
    const scrollCard: NodeListOf<Element> =
      document.querySelectorAll(className);
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
  }, [className]);
}