"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import styles from "@/app/styling/scroll_to_content.module.css";

export default function ScrollToContent() {
  const sectionRefs = useRef([]);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false);

  const [atEnd, setAtEnd] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
    sectionRefs.current = Array.from(
      document.querySelectorAll("[data-scroll-section]")
    );

    const initialScrollY = window.scrollY;
    setIsVisible(initialScrollY > 600);

    const handleScroll = () => {
      if (isScrolling.current) return;

      // Visibility (scrollY > 600)
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 600);

      // Section proximity
      const sections = sectionRefs.current;
      let closestIndex = 0;
      let closestOffset = Infinity;

      for (let i = 0; i < sections.length; i++) {
        const rect = sections[i].getBoundingClientRect();
        const offset = Math.abs(rect.top);
        if (offset < closestOffset) {
          closestOffset = offset;
          closestIndex = i;
        }
      }

      currentIndex.current = closestIndex;

      // Bottom detection
      const isAtBottom =
        window.innerHeight + scrollY >= document.body.offsetHeight - 2;
      if (isAtBottom !== atEnd) {
        setAtEnd(isAtBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollClick = () => {
    if (isScrolling.current) return;

    const sections = sectionRefs.current;

    if (atEnd) {
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        currentIndex.current = 0;
        setAtEnd(false);
        isScrolling.current = false;
      }, 750);
      return;
    }

    const target = sections[currentIndex.current];
    if (target) {
      isScrolling.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        currentIndex.current += 1;
        setAtEnd(currentIndex.current >= sections.length);
        isScrolling.current = false;
      }, 750);
    }
  };

  if (!hasMounted.current) return null;

  return (
    <div
      aria-label="Scroll to next content section"
      className={`${styles.scroll} ${!isVisible ? styles.scrollHidden : ""}`}
      onClick={handleScrollClick}
    >
      {atEnd ? (
        <FaArrowUp className={styles.arrow} />
      ) : (
        <FaArrowDown className={styles.arrow} />
      )}
    </div>
  );
}
