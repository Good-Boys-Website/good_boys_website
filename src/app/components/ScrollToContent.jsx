"use client";

import { useEffect, useRef, useState } from "react";

import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa6";

import styles from "@/app/styling/scroll_to_content.module.css";

export default function ScrollToContent() {
  const sectionIds = useRef([]);
  const [atEnd, setAtEnd] = useState(false);
  const currentIndex = useRef(0);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll("[data-scroll-section]")
    );
    sectionIds.current = sections;
  }, []);

  const handleScroll = () => {
    if (currentIndex.current < sectionIds.current.length) {
      const nextSection = sectionIds.current[currentIndex.current];
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
        currentIndex.current += 1;
        setAtEnd(currentIndex.current === sectionIds.current.length);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      currentIndex.current = 0;
      setAtEnd(false);
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
