"use client";

import styles from "@/app/styling/contact_us.module.css";

export default function ContactUs() {
  return (
    <div className={`${styles.page} fade-in`}>
      <h1 className={styles.header}>Send us a message.</h1>
      <h2 className={styles.subheader}>
        We&apos;ll try our best to respond within 24 hours.
      </h2>
      <form className={styles.form}>
        <div className={styles.nameSection}>
          <div className={styles.nameField}>
            <label>First name</label>
            <input
              type="text"
              name="owner_first_name"
              aria-label="owner_first_name"
            />
          </div>
          <div className={styles.nameField}>
            <label>Last name</label>
            <input
              type="text"
              name="owner_last_name"
              aria-label="owner_last_name"
            />
          </div>
        </div>
        <label className={styles.formLabel}>Email</label>
        <input type="email" name="owner_email" aria-label="owner_email" />
        <label>Your message</label>
        <textarea
          name="owner_message"
          aria-label="owners_additional_information"
        />
      </form>
    </div>
  );
}
