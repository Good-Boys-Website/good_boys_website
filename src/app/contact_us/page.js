"use client";

import useEmailForm from "../hooks/useEmailForm";
import React, { useState } from "react";
import Image from "next/image";
import MessageSentModal from "../components/MessageSentModal";

import styles from "@/app/styling/contact_us.module.css";

export default function ContactUs() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);

  const formInitialState = {
    owner_first_name: "",
    owner_last_name: "",
    owner_email: "",
    owner_message: "",
  };

  const validationFields = [
    "owner_first_name",
    "owner_last_name",
    "owner_email",
    "owner_message",
  ];

  const {
    formRef,
    formValues,
    handleInputChange,
    validationError,
    isLoading,
    messageStatus,
    sendEmail,
  } = useEmailForm(formInitialState, validationFields);

  return (
    <div className={`${styles.page} fade-in`}>
      <div className={styles.banner}>
        <Image
          className={styles.contactPhoto}
          src="https://res.cloudinary.com/do4shdwcc/image/upload/v1747399420/small_dog_groom_terrier_c_crop_ar_4_3_ghsxip_c_crop_ar_16_9_ascpma.jpg"
          alt=""
          width={3004}
          height={1690}
        />
        <div className={styles.bannerCopy}>
          <p className={styles.header}>We want to meet your pup.</p>
          <p className={styles.subHeader}>
            Treat them to a spa day. They&apos;re working hard, 9-5.
          </p>
        </div>
      </div>
      <p className={styles.headerHours}>Hours & Location</p>
      <section className={styles.hoursLocationSection}>
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.81010869888!2d-87.66988339999999!3d41.96141360000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3deb616229b%3A0x6bdd1adc563f0f8b!2sGood%20Boys%20Dog%20Grooming!5e0!3m2!1sen!2sus!4v1748359123042!5m2!1sen!2sus"
          width="600"
          height="450"
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
      <section className={styles.formSection}>
        <h1 className={styles.headerForm}>Send us a message.</h1>
        <h2 className={styles.subHeaderForm}>
          We&apos;ll try our best to respond within 24 hours.
        </h2>
        <form
          className={styles.form}
          ref={formRef}
          onSubmit={(e) =>
            sendEmail(e, process.env.NEXT_PUBLIC_EMAILJS_CONTACT_FORM_ID, () =>
              setIsModalVisible(true)
            )
          }
          encType="multipart/form-data"
          method="post"
        >
          <div className={styles.nameSection}>
            <div className={styles.nameField}>
              <label className={styles.formLabel}>First name*</label>
              <input
                className={styles.formInput}
                type="text"
                name="owner_first_name"
                aria-label="owner_first_name"
                value={formValues.owner_first_name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.nameField}>
              <label className={styles.formLabel}>Last name*</label>
              <input
                className={styles.formInput}
                type="text"
                name="owner_last_name"
                aria-label="owner_last_name"
                value={formValues.owner_last_name}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <label className={styles.formLabel}>Email*</label>
          <input
            className={styles.formInput}
            type="email"
            name="owner_email"
            aria-label="owner_email"
            value={formValues.owner_email}
            onChange={handleInputChange}
          />
          <label className={styles.formLabel}>Your message*</label>
          <textarea
            className={styles.formInputMessage}
            name="owner_message"
            aria-label="owners_additional_information"
            placeholder="Enter your question or message"
            value={formValues.owner_message}
            onChange={handleInputChange}
          />
          <p className={styles.requiredMessage}>*Required</p>
          <input
            className={styles.formButton}
            type="submit"
            aria-label="form_submit_button"
            value={isLoading ? "Sending..." : "Send"}
            disabled={isLoading}
          />

          {validationError.owner_first_name && (
            <p className={styles.validateMessage}>
              *Please enter your first name*
            </p>
          )}
          {validationError.owner_last_name && (
            <p className={styles.validateMessage}>
              *Please enter your last name*
            </p>
          )}
          {validationError.owner_email && (
            <p className={styles.validateMessage}>*Please enter your email*</p>
          )}
          {validationError.owner_message && (
            <p className={styles.validateMessage}>
              *Please leave a question or message*
            </p>
          )}
          {messageStatus === "error" && (
            <p className={styles.validateMessage}>
              *Message failed to send. Please try again*
            </p>
          )}
        </form>
        <MessageSentModal
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      </section>
    </div>
  );
}
