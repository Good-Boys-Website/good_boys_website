"use client";

import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Image from "next/image";

import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerCtas}>
        <div className={styles.leftContainer}>
          <Image
            className={styles.mascot}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860707/Poodle_GoodBoys_va3ted.svg"
            alt="good boys lopgo featuring an illsutarion of a dog with sunglasses"
            width={90}
            height={81}
          />
          <div className={styles.contacts}>
            <p className={styles.contact}>
              <a href="tel:+3127354214">(312) 735-4214</a>
            </p>
            <p className={styles.contact}>
              <a href="mailto:gbdoggrooming@gmail.com">
                gbdoggrooming@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className={styles.buttonSection}>
          <p className={styles.footerButtonOne}>BOOK NOW</p>
          <p className={styles.footerButton}>CONTACT US</p>
        </div>
      </section>
      <section className={styles.linkSection}>
        <div className={styles.iconSection}>
          <a href="https://www.facebook.com/gboysdoggrooming" target="_blank">
            <FaFacebook className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/gbdoggrooming/?hl=en"
            target="_blank"
          >
            <FaInstagram className={styles.icon} />
          </a>
        </div>
        <div className={styles.links}>
          <p className={styles.link}>HOME</p>
          <p className={styles.link}>SERVICES</p>
          <p className={styles.link}>FAQ</p>
          <p className={styles.link}>ABOUT</p>
          <p className={styles.link}>STAFF</p>
        </div>
      </section>
      <p className={styles.copyright}>copyright Marf Inc. 2025</p>
    </footer>
  );
}
