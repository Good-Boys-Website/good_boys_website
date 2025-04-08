"use client";

import Image from "next/image";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <p>HOME</p>
      <p>SERVICES</p>
      <p>FAQ</p>
      <p>ABOUT</p>
      <Image
        className={styles.navLogo}
        src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860689/Logo_Extraction_4_kfuxzj.png"
        alt="Good Boys Premium Dog Grooming"
        width={1563}
        height={1563}
      />
      <p>STAFF</p>
      <p>CONTACT US</p>
      <button>BOOK HERE</button>
    </nav>
  );
}
