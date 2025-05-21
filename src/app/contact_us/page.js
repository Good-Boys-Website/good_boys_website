"use client";

import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";
import Image from "next/image";

import styles from "@/app/styling/contact_us.module.css";

export default function ContactUs() {
  const formRef = useRef();

  const [messageStatus, setMessageStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const contactForm = {
    owner_first_name: "",
    owner_last_name: "",
    owner_email: "",
    owner_message: "",
  };

  const [formValues, setFormValues] = useState(contactForm);

  const inputValidationError = {
    owner_first_name: false,
    owner_last_name: false,
    owner_email: false,
    owner_message: false,
  };

  const [validationError, setValidationError] = useState(inputValidationError);

  const validateAllFields = () => {
    const errors = {};
    Object.entries(formValues).forEach(([field, value]) => {
      if (field === "owner_email") {
        errors[field] = !isValidEmail(value);
      } else {
        errors[field] = value.trim() === "";
      }
    });
    setValidationError(errors);
    return errors;
  };

  // allow the user to change the value of a form field
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  //valid email check looks for an '@' and a '.'
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const errors = validateAllFields();
    const isValid = Object.values(errors).every((error) => !error);

    if (!isValid) {
      console.log("Form validation failed:", validationError);
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        "service_rg1y33t", //email services service ID from emailjs gmail sync
        "template_9v6sgii", //template ID from created emailjs template
        formRef.current,
        "TusOyxhFS7wpSxyo6" //emailjs public key
      )
      .then(
        () => {
          console.log("MESSAGE SENT!");
          setMessageStatus("success");
          setIsLoading(false);
          setValidationError(inputValidationError);
          formRef.current.reset();
          setFormValues(contactForm);
          /*setIsModalVisible(true);*/
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          setMessageStatus("error");
          setIsLoading(false);
        }
      );
  };

  return (
    <div className={`${styles.page} fade-in`}>
      <section className={styles.formSection}>
        <h1 className={styles.header}>Send us a message.</h1>
        <h2 className={styles.subheader}>
          We&apos;ll try our best to respond within 24 hours.
        </h2>
        <form
          className={styles.form}
          ref={formRef}
          onSubmit={sendEmail}
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
            Treat them to a spa day. They&apos;re working hard, 9-5.
          </span>
        </p>
      </div>
    </div>
  );
}
