"use client";

import { useState, useRef } from "react";
import { Combobox } from "@headlessui/react";

import styles from "@/app/styling/quote_form.module.css";

export default function DogBreedSelect({ value, onChange, options }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const filteredOptions =
    query === ""
      ? options
      : options.filter((breed) =>
          breed.toLowerCase().includes(query.toLowerCase())
        );

  const clearSelection = () => {
    onChange(""); // clears selected breed in parent
    setQuery(""); // clears internal search input
    inputRef.current?.focus(); // optional: bring focus back to input
  };

  return (
    <div>
      <Combobox value={value} onChange={onChange}>
        <div className={styles.dogBreedInputContainer}>
          <Combobox.Input
            ref={inputRef}
            className={styles.formInput}
            id={styles.dogBreedInput}
            placeholder="Search & select a breed"
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(val) => val}
          />
          {value && (
            <button
              className={styles.dogBreedButton}
              type="button"
              onClick={clearSelection}
              aria-label="Clear breed selection"
            >
              ✕
            </button>
          )}
        </div>

        <Combobox.Options className={styles.suggestionList}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((breed, idx) => (
              <Combobox.Option
                className={styles.suggestionItem}
                key={idx}
                value={breed}
              >
                {breed}
              </Combobox.Option>
            ))
          ) : (
            <div className={styles.noMatches}>No matches found</div>
          )}
        </Combobox.Options>
      </Combobox>
    </div>
  );
}
