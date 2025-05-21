import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function useEmailForm(
  initialFormState,
  validationFields,
  serviceID,
  templateID,
  publicKey
) {
  const formRef = useRef();
  const [formValues, setFormValues] = useState(initialFormState);
  const [validationError, setValidationError] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState(null);

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateAllFields = () => {
    const errors = {};
    validationFields.forEach((field) => {
      if (field === "owner_email") {
        errors[field] = !isValidEmail(formValues[field]);
      } else {
        errors[field] = formValues[field].trim() === "";
      }
    });
    setValidationError(errors);
    return errors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e, onSuccess) => {
    e.preventDefault();

    const errors = validateAllFields();
    const isValid = Object.values(errors).every((error) => !error);

    if (!isValid) return;

    setIsLoading(true);
    emailjs
      .sendForm(serviceID, templateID, formRef.current, publicKey)
      .then(() => {
        setMessageStatus("success");
        setIsLoading(false);
        setValidationError({});
        formRef.current.reset();
        setFormValues(initialFormState);
        if (onSuccess) onSuccess(); // 💥 execute the success callback
      })
      .catch((error) => {
        console.error("MESSAGE FAILED", error?.text || error?.message || error);
        setMessageStatus("error");
        setIsLoading(false);
      });
  };

  return {
    formRef,
    formValues,
    setFormValues,
    handleInputChange,
    validationError,
    isLoading,
    messageStatus,
    sendEmail,
  };
}
