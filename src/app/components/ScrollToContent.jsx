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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    sectionRefs.current = Array.from(
      document.querySelectorAll("[data-scroll-section]")
    );

    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Hide icon when near top
      setIsVisible(scrollY > 600);

      // Track section index
      let closestIndex = 0;
      let closestOffset = Infinity;
      sectionRefs.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const offset = Math.abs(rect.top);
        if (offset < closestOffset) {
          closestOffset = offset;
          closestIndex = index;
        }
      });
      currentIndex.current = closestIndex;

      // Bottom detection
      const isAtBottom =
        window.innerHeight + scrollY >= document.body.scrollHeight - 5;
      setAtEnd(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollClick = () => {
    const sections = sectionRefs.current;

    if (atEnd) {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const nextIndex = currentIndex.current + 1;
    const target = sections[nextIndex];

    if (target) {
      isScrolling.current = true;
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        isScrolling.current = false;
      }, 700);
    }
  };

  return (
    <div
      aria-label="Scroll to next content section"
      className={`${styles.scroll} ${
        isVisible ? styles.visible : styles.hidden
      }`}
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
