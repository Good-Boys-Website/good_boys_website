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

  useEffect(() => {
    sectionRefs.current = Array.from(
      document.querySelectorAll("[data-scroll-section]")
    );

    const handleScroll = () => {
      if (isScrolling.current) return;

      // Show scroll arrow if user has scrolled 600px
      const shouldBeVisible = window.scrollY > 600;
      setIsVisible((prev) =>
        prev !== shouldBeVisible ? shouldBeVisible : prev
      );

      // Update section index
      let closestIndex = 0;
      let closestOffset = Infinity;

      for (let i = 0; i < sectionRefs.current.length; i++) {
        const rect = sectionRefs.current[i].getBoundingClientRect();
        const offset = Math.abs(rect.top);
        if (offset < closestOffset) {
          closestOffset = offset;
          closestIndex = i;
        }
      }

      currentIndex.current = closestIndex;

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setAtEnd((prev) => (prev !== isNearBottom ? isNearBottom : prev));
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
      isScrolling.current = true;
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        currentIndex.current = 0;
        setAtEnd(false);
        isScrolling.current = false;
      }, 800);
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

  return (
    <div
      aria-label="Scroll to next content section"
      className={styles.scroll}
      onClick={handleScrollClick}
    >
      {isVisible &&
        (atEnd ? (
          <FaArrowUp className={styles.arrow} />
        ) : (
          <FaArrowDown className={styles.arrow} />
        ))}
    </div>
  );
}
