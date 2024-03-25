// src/components/useModal.js

import { useState } from 'react';

const useModal = () => {
  // State to manage modal visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to show the modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to hide the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Return necessary values and functions
  return {
    isOpen,
    openModal,
    closeModal,
  };
};

export default useModal;
