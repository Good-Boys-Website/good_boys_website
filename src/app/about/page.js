"use client";

import useVisibilityObserver from "../hooks/useVisibilityObserver";
import Image from "next/image";
import Link from "next/link";

import styles from "@/app/styling/about.module.css";

export default function About() {
  const [photo1Ref, photo1Visible] = useVisibilityObserver();
  const [photo2Ref, photo2Visible] = useVisibilityObserver();
  const [photoMobile1Ref, photoMobile1Visible] = useVisibilityObserver();
  const [photoMobile2Ref, photoMobile2Visible] = useVisibilityObserver();

  return (
    <main className={`${styles.page} fade-in`}>
      <article className={styles.leftSection}>
        <h1 className={styles.header}>Meet Nick & Arthur</h1>
        <p className={styles.subheader}>Two dog-lovers with a mission.</p>

        <Image
          ref={photoMobile1Ref}
          className={`${styles.photoMobile} ${
            photoMobile1Visible ? styles.visibleMobile : ""
          }`}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747398710/gb_owners_c_crop_w_1400_h_1800_jxvarn.jpg"
          alt="photo of two dogs"
          width={1400}
          height={1600}
        />

        <h2 className={styles.copyHeader}>Who we are</h2>
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
          his days crunching data as a full-time analyst. He takes the lead
          in managing the admin and financial aspects of our furry venture.
        </p>

        <Image
          ref={photoMobile2Ref}
          className={`${styles.photoMobile} ${
            photoMobile2Visible ? styles.visibleMobile : ""
          }`}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744681698/IMG_5455_gamb5j.jpg"
          alt="photo of two dogs"
          width={1600}
          height={2000}
        />

        <h3 data-scroll-section className={styles.copyHeader}>
          Our Mission
        </h3>
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
        <Link href="/services" className={styles.buttonLink}>
          <button className={styles.button}>Book Now</button>
        </Link>
      </article>
      <article className={styles.sectionRight}>
        <Image
          ref={photo1Ref}
          className={`${styles.photo} ${photo1Visible ? styles.visible : ""}`}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747398710/gb_owners_c_crop_w_1400_h_1800_jxvarn.jpg"
          alt="photo of two dogs"
          width={1400}
          height={1600}
          priority
        />
        <Image
          ref={photo2Ref}
          className={`${styles.photo} ${photo2Visible ? styles.visible : ""}`}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744681698/IMG_5455_gamb5j.jpg"
          alt="photo of two dogs"
          width={1600}
          height={2000}
        />
      </article>
    </main>
  );
}
