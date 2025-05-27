import Image from "next/image";

import styles from "@/app/styling/services.module.css";

export default function Services() {
  return (
    <div className={`${styles.page} fade-in`}>
      <section className={styles.bannerSection}>
        <Image
          className={styles.servicesBanner}
          alt="Photo of a freshly groomed dog"
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399499/specialty_dog_dye_poodle_groom_c_crop_ar_16_9_ydb3eg.jpg"
          width={2356}
          height={1325}
          priority
        />
        <h1 className={styles.header}>Let's get to grooming.</h1>
        <h2 className={styles.subHeader}>
          Book your appointment with Good Boys below.
        </h2>
      </section>
      <div className={styles.bookingContainer}>
        <iframe
          src="https://booking.moego.pet/ol/GoodBoysDogGrooming/book?utm_medium=embed"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Online booking"
          scrolling="yes"
        ></iframe>
      </div>
      <section>
        <p>Promos & Discounts</p>
      </section>
      <section>
        <p>Map & Hours</p>
      </section>
    </div>
  );
}
