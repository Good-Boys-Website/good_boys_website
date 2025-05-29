"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { faqs } from "@/app/data/data";

import styles from "@/app/styling/faq.module.css";
import Link from "next/link";

function FaqCard({ question, answer }) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <li ref={ref} className={styles.faq}>
      <p className={styles.question}>{question}</p>
      <div className={styles.divider}></div>
      <p className={`${styles.answer} ${isVisible ? styles.visible : ""}`}>
        {answer}
      </p>
    </li>
  );
}

export default function Faq() {
  return (
    <div className={`${styles.page} fade-in`}>
      <h1 className={styles.header}>You have questions - we have answers.</h1>
      <h2 className={styles.subheader}>
        Below are some commonly asked questions by clients:
      </h2>
      <Image
        className={styles.faqPhoto}
        src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747398365/poodle_dog_groom_dye_c_crop_ar_16_9_mg9mss.jpg"
        alt="Photo of a freshly groomed dog"
        width={3024}
        height={1701}
        priority
      />
      <ul data-scroll-section className={styles.faqSection}>
        {faqs.map((faq) => (
          <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </ul>
      <section data-scroll-section className={styles.buttonSection}>
        <Link href="/services" className={styles.buttonLink}>
          <button className={styles.button}>Book A Spa Day</button>
        </Link>
      </section>
    </div>
  );
}
