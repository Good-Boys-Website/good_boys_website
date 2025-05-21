"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";

import styles from "@/app/styling/quote_form.module.css";

export default function MessageSentModal({ isModalVisible, closeModal }) {
  return (
    <>
      {isModalVisible && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <Image
              className={styles.mascot}
              src="https://res.cloudinary.com/do4shdwcc/image/upload/v1743860707/Poodle_GoodBoys_va3ted.svg"
              alt="good boys lopgo featuring an illsutarion of a dog with sunglasses"
              width={90}
              height={81}
            />
            <div className={styles.modalSection}>
              <div className={styles.modalSectionTop}>
                <p className={styles.modalMessageHeader}>Message Sent!</p>
                <IoCloseOutline
                  onClick={closeModal}
                  className={styles.closeButton}
                  aria-label="close modal button"
                />
              </div>
              <p className={styles.modalMessage}>
                We can't wait to meet your dog
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
