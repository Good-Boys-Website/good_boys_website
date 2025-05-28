"use client";

import Image from "next/image";
import Link from "next/link";

import styles from "@/app/styling/about.module.css";

export default function About() {
  return (
    <div className={`${styles.page} fade-in`}>
      <section className={styles.leftSection}>
        <h1 className={styles.header}>Meet Nick & Arthur</h1>
        <h2 className={styles.subheader}>Two dog-lovers with a mission.</h2>

        <Image
          className={styles.photoMobile}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747398710/gb_owners_c_crop_w_1400_h_1800_jxvarn.jpg"
          alt="photo of two dogs"
          width={1400}
          height={1600}
        />

        <h3 className={styles.copyHeader}>Who we are</h3>
        <p className={styles.copySection}>
          In 2018, fate (and a shared love for dogs) brought Arthur and Nick
          together in Chicago. Fast forward to 2020, and they embarked on a
          heartwarming journey to add a furry family member - that&apos;s when
          they bought their Standard Poodle, Ezekiel!
        </p>
        <p className={styles.copySection}>
          Nick, the mastermind behind the shears, brings over 7 years of
          experience in the world of dog grooming to the table. With a paw-
          sitively impressive track record as an award-winning dog groomer,
          Nick&apos;s passion for pampering pooches knows no bounds. His heart
          beats for poodles and all things creative in dog grooming!
        </p>
        <p className={styles.copySection}>
          Arthur, the numbers whiz, holds a BA in Business Analytics and spends
          his days crunching data as a full-time data analyst. He takes the lead
          in managing the admin and financial aspects of our furry venture.
        </p>

        <Image
          className={styles.photoMobile}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744681698/IMG_5455_gamb5j.jpg"
          alt="photo of two dogs"
          width={1600}
          height={2000}
        />

        <h4 data-scroll-section className={styles.copyHeader}>
          Our Mission
        </h4>
        <p className={styles.copySection}>
          At Good Boys, our mission is simple yet heartfelt: we&apos;re all
          about making tails wag and fur shine! We strive to provide every dog
          with a beautiful groom in an environment that&apos;s as comfy as their
          favorite napping spot. Stress? That&apos;s a word we don&apos;t
          understand - our four- legged clients experience only low-stress
          pampering and positive vibes.
        </p>
        <p className={styles.copySection}>
          So, whether you&apos;re here to learn more about us, book an
          appointment for your fur baby, or simply share your love for all
          things canine, we&apos;re thrilled to have you join us on this
          tail-wagging adventure. Welcome to the Good Boys family!
        </p>
        <Link href="/services">
          <button className={styles.button}>Book Now</button>
        </Link>
      </section>
      <section className={styles.sectionRight}>
        <Image
          className={styles.photo}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747398710/gb_owners_c_crop_w_1400_h_1800_jxvarn.jpg"
          alt="photo of two dogs"
          width={1400}
          height={1600}
        />
        <Image
          className={styles.photo}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744681698/IMG_5455_gamb5j.jpg"
          alt="photo of two dogs"
          width={1600}
          height={2000}
        />
      </section>
    </div>
  );
}
