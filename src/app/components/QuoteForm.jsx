"use client";

import emailjs from "@emailjs/browser";
import React, { useState, useRef } from "react";

import styles from "@/app/styling/quote_form.module.css";

export default function QuoteForm() {
  const formRef = useRef();
  const [messageStatus, setMessageStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false);
  };

  function MessageSentModal() {
    return (
      <>
        {isModalVisible && (
          <div>
            <div>
              <p>Message Sent!</p>
              <p>We will be in touch.</p>
              <button onClick={closeModal}>close</button>
            </div>
          </div>
        )}
      </>
    );
  }

  const quoteForm = {
    owner_name: "",
    owner_email: "",
    service_type: "",
    dog_breed: "",
    dog_weight: "",
    owner_message: "",
  };

  const [formValues, setFormValues] = useState(quoteForm);

  const services = [
    "service 1",
    "service 2",
    "service 3",
    "service 4",
    "service 5",
  ];

  const dogBreeds = ["breed 1", "breed 2", "breed 3", "breed 4", "breed 5"];

  const dogWeights = [
    "weight range 1",
    "weight range 2",
    "weight range 3",
    "weight range 4",
    "weight range 5",
  ];

  const inputValidationError = {
    owner_name: false,
    owner_email: false,
    service_type: false,
    dog_breed: false,
    dog_weight: false,
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
        "template_2qi2mil", //template ID from created emailjs template
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
          setFormValues(quoteForm);
          setIsModalVisible(true);
        },
        (error) => {
          console.log("MESSAGE FAILED", error.text);
          setMessageStatus("error");
          setIsLoading(false);
        }
      );
  };

  return (
    <section className={styles.formContainer}>
      <h1 className={styles.formHeader}>Get a custom quote.</h1>
      <form
        className={styles.form}
        ref={formRef}
        onSubmit={sendEmail}
        encType="multipart/form-data"
        method="post"
      >
        <label className={styles.formLabel}>Full Name*</label>
        <input
          className={styles.formInput}
          type="text"
          name="owner_name"
          aria-label="owner_name"
          value={formValues.owner_name}
          onChange={handleInputChange}
        />
        <label className={styles.formLabel}>Email*</label>
        <input
          className={styles.formInput}
          type="email"
          name="owner_email"
          aria-label="owner_email"
          value={formValues.owner_email}
          onChange={handleInputChange}
        />
        <label className={styles.formLabel}>Service needed*</label>
        <select
          className={styles.formSelect}
          name="service_type"
          value={formValues.service_type}
          aria-label="service_type"
          onChange={(e) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              service_type: e.target.value,
            }))
          }
        >
          <option value="">Select a service</option>
          {services.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>

        <label className={styles.formLabel}>Dog breed*</label>
        <select
          className={styles.formSelect}
          name="dog_breed"
          value={formValues.dog_breed}
          aria-label="dog_breed"
          onChange={(e) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              dog_breed: e.target.value,
            }))
          }
        >
          <option value="">Select your dog's breed</option>
          {dogBreeds.map((breed, index) => (
            <option key={index} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <label className={styles.formLabel}>Weight*</label>
        <select
          className={styles.formSelect}
          name="dog_weight"
          value={formValues.dog_weight}
          aria-label="dog_weight"
          onChange={(e) =>
            setFormValues((prevValues) => ({
              ...prevValues,
              dog_weight: e.target.value,
            }))
          }
        >
          <option value="">Select a weight range</option>
          {dogWeights.map((weight, index) => (
            <option key={index} value={weight}>
              {weight}
            </option>
          ))}
        </select>

        <label className={styles.formLabel}>Additional information:</label>
        <textarea
          className={styles.formInputMessage}
          name="owner_message"
          aria-label="ownerss_additional_information"
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

        {validationError.owner_name && (
          <p className={styles.validateMessage}>*Please enter your name*</p>
        )}
        {validationError.owner_email && (
          <p className={styles.validateMessage}>
            *Please enter a valid email address*
          </p>
        )}
        {validationError.service_type && (
          <p className={styles.validateMessage}>
            *Please select your dog's service*
          </p>
        )}
        {validationError.dog_breed && (
          <p className={styles.validateMessage}>
            *Please select your dog's breed*
          </p>
        )}
        {validationError.dog_weight && (
          <p className={styles.validateMessage}>
            *Please select your dog's weight range*
          </p>
        )}
        {messageStatus === "error" && (
          <p className={styles.validateMessage}>
            *Message failed to send. Please try again*
          </p>
        )}
      </form>
      <MessageSentModal />
    </section>
  );
}
