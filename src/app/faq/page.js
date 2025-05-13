"use client";

import styles from "@/app/styling/faq.module.css";

export default function faq() {
  return (
    <div className={`${styles.page} fade-in`}>
      <h1 className={styles.header}>You have questions - we have answers.</h1>
      <h2 className={styles.subheader}>
        Below are some commonly asked questions by clients:
      </h2>
    </div>
  );
}
