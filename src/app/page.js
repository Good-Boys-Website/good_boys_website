import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>HELLO WORLD! This is the Good Boys Dog Grooming Website</h1>
        <Image
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860707/Poodle_GoodBoys_va3ted.svg"
          alt="good boys lopgo featuring an illsutarion of a dog with sunglasses"
          width={90}
          height={81}
        />

        {/*<div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>*/}
      </main>
    </div>
  );
}
