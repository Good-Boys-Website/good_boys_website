import Image from "next/image";
import { reviews } from "./data/reviews";
import styles from "./page.module.css";

function ReviewCard({ review, name }) {
  return (
    <li className={styles.review}>
      <p className={styles.reviewContent}>"{review}"</p>
      <p className={styles.reviewName}>- {name}</p>
    </li>
  );
}

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
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860611/FullSizeRender_VSCO_5_wrmerf.jpg"
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
        <section>
          <h1 className={styles.reviewsHeader}>
            See what our clients are saying about us.
          </h1>
          <ul className={styles.reviewsContainer}>
            {reviews.map((review) => (
              <ReviewCard
                key={review.id}
                review={review.review}
                name={review.name}
              />
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
