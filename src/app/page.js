import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1>Your dog called - They want a makeover.</h1>
        <h2 className={styles.subHeader}>
          Book today for the ultimate spa day.
        </h2>
        <div className={styles.heroPhotoContainer}>
          <Image
            className={styles.heroPhoto}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860611/FullSizeRender_VSCO_5_wrmerf.jpg"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
        </div>
        <section>
          {/*<Image
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860630/IMG_6897_pgvr53.heic"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
          <Image
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860666/IMG_5850_v4jj2r.heic"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />*/}
        </section>
      </main>
    </div>
  );
}
