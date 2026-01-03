import Image from "next/image";
import QuoteForm from "./components/QuoteForm";
import { reviews } from "./data/data";
import ScrollToContent from "./components/ScrollToContent";

import styles from "./page.module.css";
import Link from "next/link";

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
    <main className={`${styles.page} fade-in`}>
      <ScrollToContent />
      <article>
        <h1 className={styles.header}>
          Your dog called - They want a makeover.
        </h1>
        <p className={styles.subHeader}>
          Book Good Boys today for the ultimate dog grooming spa day.
        </p>
        <Image
          className={styles.heroPhoto}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333722/resized_b08phu.jpg"
          alt="Photo of a freshly groomed dog"
          width={2972}
          height={1699}
          priority
        />
        <Image
          className={styles.heroPhotoMobile}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1748634985/IMG_0713_gtz66d.jpg"
          alt="Photo of a freshly groomed dog"
          width={3024}
          height={4032}
          priority
        />
        <section data-scroll-section className={styles.sectionBest}>
          <div className={styles.groomCopy}>
            <h2 className={styles.sectionHeader}>
              Best-in-class grooming for Chicago dogs.
            </h2>
            <p className={styles.copyBest}>
              Good Boys prioritizes stress-free dog grooming by operating at a
              small scale on Chicago's Northside. It's simple: dogs get stressed
              out, just like us. We want to keep the vibes mellow and ensure
              your dog <b>loves</b> their grooming experience. Good Boys offers
              personalized dog grooming from our family owned, small business.
              We&apos;re not your mom&apos;s dog groomer, but we are a trusted
              dog grooming salon in Chicago&apos;s northside. Our salon offers
              an attentive bath, precision haircut, premium dog grooming styles,
              nail trimming, ear cleaning and plenty of dog treats. All while
              using high-end products, right for your dog. We&apos;ll also
              express your dog&apos;s anal glands, cause we know you don&apos;t
              want to.
            </p>
          </div>
          <div className={styles.spaDogsSection}>
            <Image
              className={styles.spaDogBest}
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333191/IMG_6897_aogyjy.jpg"
              alt="Photo of a freshly groomed dog"
              width={3024}
              height={4032}
            />
            <Image
              className={styles.spaDogBest}
              id={styles.spaDogBottom}
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333190/IMG_9259_tb4coe.jpg"
              alt="Photo of a freshly groomed dog"
              width={3024}
              height={4032}
            />
          </div>
        </section>
        <section data-scroll-section className={styles.section}>
          <div className={styles.spaSection}>
            <h3 className={styles.sectionHeaderTwo}>
              Thorough baths. Shiny coats. Lots of treats. All for your dog.
            </h3>
            <ul className={styles.spaSectionCopy}>
              <li className={styles.copyHeader}>
                We start with a soothing bath and blow dry using quality
                products tailored to your dog&apos;s skin and coat type.
              </li>
              <li className={styles.copyHeader}>
                Then, we move on to a custom groom taking it at your dog&apos;s
                pace. Sometimes we need to take treat breaks, and that's okay.
              </li>
              <li className={styles.copyHeaderBottom}>
                Finally, a nail trim and ear cleaning and once we wrap up, your
                dog&apos;s sent home with a seasonal bandana. How cute is that?
              </li>
            </ul>
            <Link href="/services">
              <button className={styles.spaDayButton}>Book A Spa Day</button>
            </Link>
          </div>
          <Image
            className={styles.spaDogThree}
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1744333190/IMG_5850_kj7igd.jpg"
            alt="Photo of a freshly groomed dog"
            width={3024}
            height={4032}
          />
        </section>
        <section data-scroll-section className={styles.sectionFamily}>
          <div className={styles.groomCopyMobile}>
            <h2 className={styles.sectionHeaderFamily}>
              We&apos;re a family-owned dog grooming salon near you.
            </h2>
            <p className={styles.copyBodyFamily}>
              Good Boys has offered premium dog grooming in Chicago since 2023.
              Unlike other businesses, Nick and Arthur both live in Chicago with
              their two beloved poodles. Nick has over seven years of experience
              in grooming Chicago&apos;s dogs. Our trusted salon provides
              high-end service from owners who care about our community. Good
              Boys is located on Ashland Ave and Montrose Ave between the
              Ravenswood and North Center neighborhoods; and just a short walk
              from the Montrose Brown Line CTA station. Good Boys offers premium
              grooming for dogs from all over Chicago, including nearby Lincoln
              Square, Andersonville, Uptown and Lakeview West neighborhoods.
              While we groom dogs in our neighborhood, we have treasured clients
              from all over Chicago.
            </p>
            <h2 className={styles.sectionHeader}>Our Values</h2>
            <p className={styles.copyBodyFamily}>
              Good Boys values providing your dog with a premium, relaxing dog
              grooming and high-end spa experience. We value delivering customer
              satisfaction by providing the right custom grooming service that
              meets your vision for your canine friend.
            </p>
          </div>
        </section>
        <section data-scroll-section>
          <QuoteForm />
        </section>
        <section data-scroll-section className={styles.reviewsSection}>
          <h2 className={styles.reviewsHeader}>
            See what our clients are saying about Good Boys Dog Grooming.
          </h2>
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
      </article>
    </main>
  );
}
