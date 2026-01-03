"use client";

import useEmailForm from "../hooks/useEmailForm";
import React, { useState } from "react";
import MessageSentModal from "./MessageSentModal";
import DogBreedSelect from "./DogBreedSelect";
import { dogBreeds, dogWeights, services } from "../data/data";

import styles from "@/app/styling/quote_form.module.css";

export default function QuoteForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => setIsModalVisible(false);

  const formInitialState = {
    owner_name: "",
    owner_email: "",
    service_type: "",
    dog_breed: "",
    dog_weight: "",
    owner_message: "",
  };

  const validationFields = [
    "owner_name",
    "owner_email",
    "service_type",
    "dog_breed",
    "dog_weight",
    "owner_message",
  ];

  const {
    formRef,
    formValues,
    setFormValues,
    handleInputChange,
    validationError,
    isLoading,
    messageStatus,
    sendEmail,
  } = useEmailForm(formInitialState, validationFields);

  return (
    <section className={styles.formContainer}>
      <h1 className={styles.formHeader}>Get a custom quote for your dog.</h1>
      <form
        className={styles.form}
        ref={formRef}
        onSubmit={(e) =>
          sendEmail(e, process.env.NEXT_PUBLIC_EMAILJS_REQUEST_QUOTE_ID, () =>
            setIsModalVisible(true)
          )
        }
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
        <DogBreedSelect
          value={formValues.dog_breed}
          onChange={(val) =>
            setFormValues((prev) => ({
              ...prev,
              dog_breed: val,
            }))
          }
          options={dogBreeds}
        />

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
          aria-label="owners_additional_information"
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
      <MessageSentModal
        isModalVisible={isModalVisible}
        closeModal={closeModal}
      />
    </section>
  );
}
