"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import styles from "@/app/styling/scroll_to_content.module.css";

export default function ScrollToContent() {
  const sectionRefs = useRef([]);
  const [atEnd, setAtEnd] = useState(false);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false); // prevents double firing
  const [isVisible, setIsVisible] = useState(false);

  // Show the arrow when the user scrolls down 600px
  const toggleVisibility = () => {
    if (window.pageYOffset > 600) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    sectionRefs.current = Array.from(
      document.querySelectorAll("[data-scroll-section]")
    );

    const onScroll = () => {
      if (isScrolling.current) return; // ⛔ prevent interference during auto-scroll

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

      const isNearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      setAtEnd(isNearBottom);
    };

    window.addEventListener("scroll", toggleVisibility, onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", toggleVisibility, onScroll);
    };
  }, []);

  const handleScroll = () => {
    if (isScrolling.current) return;

    const sections = sectionRefs.current;

    // If at end, scroll to top
    if (atEnd) {
      isScrolling.current = true;
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        currentIndex.current = 0;
        setAtEnd(false);
        isScrolling.current = false;
      }, 800); // allow scroll & index update
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
      onClick={handleScroll}
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
