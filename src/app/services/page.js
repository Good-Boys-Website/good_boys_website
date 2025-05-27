import Image from "next/image";

import styles from "@/app/styling/services.module.css";
import { lazy } from "react";

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
      <p className={styles.sectionHeader}>Promos & Discounts</p>
      <article className={styles.mainPage}>
        <section className={styles.firstTimeSection}>
          <Image
            className={styles.firstTimePhoto}
            alt="Photo of a freshly groomed dog"
            src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399674/small_dog_groom_c_crop_ar_1_1_n5br6k.jpg"
            width={3024}
            height={3024}
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
          <section>
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
          <section>
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
              If you think we're neat, let us know!
            </p>
            <div className={styles.priceSection}>
              <p className={styles.priceReferral}>
                $10 off
                <span className={styles.nextService}> your next service</span>
              </p>
            </div>
            <div>
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
      <p className={styles.sectionHeader}>Hours & Location</p>
      <section className={styles.hoursLocationSection}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.81010869888!2d-87.66988339999999!3d41.96141360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3deb616229b%3A0x6bdd1adc563f0f8b!2sGood%20Boys%20Dog%20Grooming!5e0!3m2!1sen!2sus!4v1748359123042!5m2!1sen!2sus"
          width="600"
          height="450"
          /*style="border:0;"*/
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <section>
          <div className={styles.dayTime}>
            <p className={styles.day}>Tuesday</p>
            <p className={styles.time}>8:30 AM - 4:30 PM</p>
          </div>
          <div className={styles.dayTime}>
            <p className={styles.day}>Wednesday</p>
            <p className={styles.time}>8:30 AM - 4:30 PM</p>
          </div>
          <div className={styles.dayTime}>
            <p className={styles.day}>Thursday</p>
            <p className={styles.time}>8:30 AM - 4:30 PM</p>
          </div>
          <div className={styles.dayTime}>
            <p className={styles.day}>Friday</p>
            <p className={styles.time}>8:30 AM - 4:30 PM</p>
          </div>
          <div className={styles.dayTime}>
            <p className={styles.day}>Saturday</p>
            <p className={styles.time}>8:30 AM - 4:30 PM</p>
          </div>
          <div className={styles.dayTime}>
            <p className={styles.day}>Sunday</p>
            <p className={styles.time}>Closed</p>
          </div>
          <div className={styles.dayTime}>
            <p className={styles.day}>Monday</p>
            <p className={styles.time}>Closed</p>
          </div>
        </section>
      </section>
    </div>
  );
}
