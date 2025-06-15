import Image from "next/image";

import { serviceMenu } from "../data/data";
import styles from "@/app/styling/services.module.css";

function ServiceMenuCard({ name, size, price }) {
  return (
    <li>
      <p>{name}</p>
      <p>{size}</p>
      <p>{price}</p>
    </li>
  );
}

export default function Services() {
  return (
    <main className={`${styles.page} fade-in`}>
      <header className={styles.bannerSection}>
        <Image
          className={styles.servicesBanner}
          alt="Photo of a freshly groomed dog"
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399499/specialty_dog_dye_poodle_groom_c_crop_ar_16_9_ydb3eg.jpg"
          width={2356}
          height={1325}
          priority
        />
        <Image
          className={styles.servicesBannerMobile}
          alt="Photo of a freshly groomed dog"
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1748572953/IMG_4624_fmukgy.jpg"
          width={3024}
          height={4032}
          priority
        />
        <div className={styles.bannerCopy}>
          <p className={styles.header}>Let&apos;s get to grooming.</p>
          <p className={styles.subHeader}>
            Book your appointment with Good Boys below.
          </p>
        </div>
      </header>
      <article>
        <section>
          <ul>
            {serviceMenu.map((service) => (
              <ServiceMenuCard
                key={service.id}
                name={service.name}
                size={service.size}
                price={service.price}
              />
            ))}
          </ul>
        </section>
        <h1 className={styles.bookingHeader}>
          Old or new, we want to see you.
        </h1>
        <section className={styles.bookingSection}>
          <div className={styles.bookingButtons}>
            <a
              href="https://booking.moego.pet/ol/GoodBoysDogGrooming/book"
              target="_blank"
            >
              <button className={styles.bookingButton}>
                I&apos;ve been here before
              </button>
            </a>
          </div>
          <div className={styles.bookingButtons}>
            <a
              href="https://form.moego.pet/go/form?formId=531fada1d9c04b85995a109b44359401"
              target="_blank"
            >
              <button className={styles.bookingButton}>
                I&apos;m a new client
              </button>
            </a>
          </div>
        </section>
        <h1 className={styles.sectionHeader}>Promos & Discounts</h1>
      </article>
      <article data-scroll-section className={styles.mainPage}>
        <section className={styles.firstTimeSection}>
          <Image
            className={styles.firstTimePhoto}
            alt="Photo of a freshly groomed dog"
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399674/small_dog_groom_c_crop_ar_1_1_n5br6k.jpg"
            width={3024}
            height={3024}
            loading="lazy"
          />
          <p className={styles.mainText}>First Time Clients</p>
          <p className={styles.subText}>
            Free toothbrush add-on (no more stinky breath).
          </p>
          <div className={styles.priceSection}>
            <p className={styles.price}>
              <span className={styles.amount}>$8.00</span> FREE
            </p>
          </div>
        </section>
        <div>
          <section className={styles.referralSection}>
            <Image
              className={styles.referralPhoto}
              alt="image of Good Boys referral program"
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747400081/client_referral_program_kfp5pd.jpg"
              width={1074}
              height={522}
              loading="lazy"
            />
            <p className={styles.mainText}>Re-furral Program</p>
            <p className={styles.subText}>
              Tell your friends about us and get a discount.
            </p>
            <div className={styles.priceSection}>
              <p className={styles.priceReferral}>
                $25 off
                <span className={styles.nextService}> your next service</span>
              </p>
            </div>
          </section>
          <section className={styles.reviewSection}>
            <Image
              className={styles.referralPhoto}
              alt="image of a freshly groomed dog"
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747400025/poodle_dog_groom_dye_c_crop_ar_16_9_1_h9jhlz.jpg"
              width={3024}
              height={1701}
              loading="lazy"
            />
            <p className={styles.mainText}>Give us a review</p>
            <p className={styles.subText}>
              If you think we&apos;re neat, let us know!
            </p>
            <div className={styles.priceSection}>
              <p className={styles.priceReferral}>
                $10 off
                <span className={styles.nextService}> your next service</span>
              </p>
            </div>
            <div className={styles.buttonSection}>
              <a
                href="http://yelp.com/biz/good-boys-dog-grooming-chicago#reviews"
                target="_blank"
              >
                <button className={styles.servicesButton}>Yelp</button>
              </a>
              <a
                href="https://www.google.com/search?sca_esv=4fa71b8dbfa83ed9&rlz=1C5CHFA_enUS943US943&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0_vxXI22xmSkyM9ifaMi4ct_34JuFvg-Xjy1MroYnIAmC0H7TXHavDuqHjtQ_f0tQEzmLrv5_NscvJhdM30ZlvWFoFjM4bMPiCQxKckbQK5_0_C-A%3D%3D&q=Good+Boys+Dog+Grooming+Reviews&sa=X&ved=2ahUKEwjZlr3TgMSNAxVwKlkFHdTkMQwQ0bkNegQIKRAE&biw=1440&bih=703&dpr=2"
                target="_blank"
              >
                <button className={styles.servicesButton}>Google</button>
              </a>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}
