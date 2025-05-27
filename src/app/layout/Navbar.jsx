"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  // Functionality to open and close ham menu
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`${styles.nav} fade-in`}>
        <Link href="/">
          <p className={styles.link}>HOME</p>
        </Link>
        <Link href="/services">
          <p className={styles.link}>SERVICES</p>
        </Link>
        <Link href="/faq">
          <p className={styles.link}>FAQ</p>
        </Link>
        <Link href="/about">
          <p className={styles.link}>ABOUT</p>
        </Link>
        <div className={styles.navLogoContainer}>
          <Image
            className={styles.navLogo}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860689/Logo_Extraction_4_kfuxzj.png"
            alt="Good Boys Premium Dog Grooming"
            width={1563}
            height={1563}
            priority
          />
          <Image
            className={styles.navLogoDark}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1746153393/GB_Logo_-_Dark_Mode_3_uhzref.png"
            alt="Good Boys Premium Dog Grooming"
            width={1563}
            height={1563}
            loading="lazy"
          />
        </div>
        <Link href="/staff">
          <p className={styles.link}>STAFF</p>
        </Link>
        <Link href="/contact_us">
          <p className={styles.link}>CONTACT US</p>
        </Link>
        <Link href="/services">
          <button className={styles.buttonText}>BOOK HERE</button>
        </Link>
      </nav>

      <nav className={`${styles.mobileNav} fade-in`}>
        <Image
          className={styles.navLogoMobile}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860689/Logo_Extraction_4_kfuxzj.png"
          alt="Good Boys Premium Dog Grooming"
          width={1563}
          height={1563}
        />
        <Image
          className={styles.navLogoMobileDark}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1746153393/GB_Logo_-_Dark_Mode_3_uhzref.png"
          alt="Good Boys Premium Dog Grooming"
          width={1563}
          height={1563}
          loading="lazy"
        />

        {/*hamburger menu*/}
        <div id={styles.hamMenuContainer} onClick={toggleMenu}>
          <div
            className={`${styles.menuButtonBurger} ${
              menuOpen ? styles.open : ""
            }`}
          ></div>
        </div>
      </nav>

      {/* mobile menu */}
      <menu
        className={`${styles.menu} ${menuOpen ? styles.active : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/">
            <h4 className={styles.link} role="heading">
              HOME
            </h4>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/services">
            <h4 className={styles.link} role="heading">
              SERVICES
            </h4>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/faq">
            <h4 className={styles.link} role="heading">
              FAQs
            </h4>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/about">
            <h4 className={styles.link} role="heading">
              ABOUT
            </h4>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/staff">
            <h4 className={styles.link} role="heading">
              STAFF
            </h4>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navContainer} href="/contact_us">
            <h4 className={styles.link} role="heading">
              CONTACT US
            </h4>
          </Link>
        </div>
      </menu>
    </>
  );
}
