"use client";

import { useEffect, useRef, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import styles from "@/app/styling/scroll_to_content.module.css";

export default function ScrollToContent() {
  const sectionRefs = useRef([]);
  const [atEnd, setAtEnd] = useState(false);
  const currentIndex = useRef(0);
  const isScrolling = useRef(false); // prevents double firing

  useEffect(() => {
    sectionRefs.current = Array.from(
      document.querySelectorAll("[data-scroll-section]")
    );

    const handleManualScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;

      if (Math.abs(scrollPosition - documentHeight) < 80) {
        setAtEnd(true);
      } else {
        setAtEnd(false);
      }
    };

    window.addEventListener("scroll", handleManualScroll);
    return () => {
      window.removeEventListener("scroll", handleManualScroll);
    };
  }, []);

  const handleScroll = () => {
    if (isScrolling.current) return;

    const sections = sectionRefs.current;

    // If at end, scroll to top
    if (currentIndex.current >= sections.length) {
      isScrolling.current = true;
      window.scrollTo({ top: 0, behavior: "smooth" });

      setTimeout(() => {
        currentIndex.current = 0;
        setAtEnd(false);
        isScrolling.current = false;
      }, 600); // allow scroll to complete
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
      }, 600);
    }
  };

  return (
    <div
      aria-label="Scroll to next content section"
      className={styles.scroll}
      onClick={handleScroll}
    >
      {atEnd ? <FaArrowUp /> : <FaArrowDown />}
    </div>
  );
}
