import Image from "next/image";
import { reviews } from "./data/reviews";
import styles from "./page.module.css";

function ReviewCard({ review, name }) {
  return (
    <li className={styles.review}>
      <p className={styles.reviewContent}>&quot;{review}&quot;</p>
      <p className={styles.reviewName}>- {name}</p>
    </li>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main>
        <h1 className={styles.header}>
          Your dog called - They want a makeover.
        </h1>
        <h2 className={styles.subHeader}>
          Book today for the ultimate spa day.
        </h2>
        <Image
          className={styles.heroPhoto}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333722/resized_b08phu.jpg"
          alt="Photo of a freshly groomed dog"
          width={2972}
          height={1699}
        />
        <section>
          <Image
            className={styles.spaDog}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333191/IMG_6897_aogyjy.jpg"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
          <Image
            className={styles.spaDog}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333190/IMG_9259_tb4coe.jpg"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
          <h3>Best-in-class grooms for Chicago dogs.</h3>
          <p>
            Good boys prioritizes stress-free grooming by operating at a small
            scale. Its simple: dogs get stressed out, just like us. We want to
            keep the vibes mellow and ensure your dog <b>loves</b> their
            groomer.
          </p>
        </section>
        <Image
          className={styles.spaDog}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333190/IMG_5850_kj7igd.jpg"
          alt="Photo of a freshly groomed dog"
          width={3024}
          height={4032}
        />
        <section></section>
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
