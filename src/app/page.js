import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.page}>
        <main>
          <h1>Your dog called - They want a makeover.</h1>
          <h2>Book today for the ultimate spa day.</h2>
          <div className={styles.heroPhotoContainer}>
            <Image
              className={styles.heroPhoto}
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860611/FullSizeRender_VSCO_5_wrmerf.jpg"
              alt="Photo of a freshly groomed dog"
              width={3024}
              height={4032}
            />
          </div>
        </main>
      </div>
    </>
  );
}
