"use client";

import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <p className={styles.link}>HOME</p>
      <p className={styles.link}>SERVICES</p>
      <p className={styles.link}>FAQ</p>
      <p className={styles.link}>ABOUT</p>
      <Image
        className={styles.navLogo}
        src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860689/Logo_Extraction_4_kfuxzj.png"
        alt="Good Boys Premium Dog Grooming"
        width={1563}
        height={1563}
      />
      <p className={styles.link}>STAFF</p>
      <p className={styles.link}>CONTACT US</p>
      <button className={styles.link}>BOOK HERE</button>
    </nav>
  );
}
