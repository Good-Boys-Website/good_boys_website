"use client";

import React from "react";
import Select from "react-select";

import styles from "@/app/styling/quote_form.module.css";

export default function DogBreedSelect({ value, onChange, options }) {
  const selectedOption = value ? { label: value, value: value } : null;

  return (
    <Select
      className={styles.dogSelect}
      options={options}
      placeholder="Search & select a breed"
      value={selectedOption}
      onChange={(selected) => onChange(selected?.value || "")}
      isSearchable
      isClearable={true}
      name="dog_breed"
    />
  );
}
