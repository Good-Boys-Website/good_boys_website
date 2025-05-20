"use client";

import Image from "next/image";

import styles from "@/app/styling/contact_us.module.css";

export default function ContactUs() {
  return (
    <div className={`${styles.page} fade-in`}>
      <section className={styles.formSection}>
        <h1 className={styles.header}>Send us a message.</h1>
        <h2 className={styles.subheader}>
          We&apos;ll try our best to respond within 24 hours.
        </h2>
        <form className={styles.form}>
          <div className={styles.nameSection}>
            <div className={styles.nameField}>
              <label className={styles.formLabel}>First name</label>
              <input
                className={styles.formInput}
                type="text"
                name="owner_first_name"
                aria-label="owner_first_name"
              />
            </div>
            <div className={styles.nameField}>
              <label className={styles.formLabel}>Last name</label>
              <input
                className={styles.formInput}
                type="text"
                name="owner_last_name"
                aria-label="owner_last_name"
              />
            </div>
          </div>
          <label className={styles.formLabel}>Email</label>
          <input
            className={styles.formInput}
            type="email"
            name="owner_email"
            aria-label="owner_email"
          />
          <label className={styles.formLabel}>Your message</label>
          <textarea
            className={styles.formInputMessage}
            name="owner_message"
            aria-label="owners_additional_information"
            placeholder="Enter your question or message"
          />
          <input
            className={styles.formButton}
            type="submit"
            aria-label="form_submit_button"
            /*value={isLoading ? "Sending..." : "Send"}
          disabled={isLoading}*/
          />
        </form>
      </section>
      <div className={styles.bottom}>
        <Image
          className={styles.contactPhoto}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399420/small_dog_groom_terrier_c_crop_ar_4_3_ghsxip_c_crop_ar_16_9_ascpma.jpg"
          alt=""
          width={3004}
          height={1690}
        />
        <p className={styles.bottomCopy}>
          We want to meet your pup.
          <br />
          <span className={styles.bottomCopySub}>
            Treat them to a spa day. They're working hard, 9-5.
          </span>
        </p>
      </div>
    </div>
  );
}
