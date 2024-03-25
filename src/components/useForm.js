import { useState } from 'react';

const useForm = (initialValues, onSubmit) => {
  // State to manage form values
  const [formValues, setFormValues] = useState(initialValues);

  // Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  // Return necessary values and functions
  return {
    formValues,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
