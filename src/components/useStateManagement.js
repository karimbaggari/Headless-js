import { useState } from 'react';

const useStateManagement = (initialState) => {
  // State to manage application state
  const [state, setState] = useState(initialState);

  // Function to update state
  const updateState = (newState) => {
    setState((prevState) => ({
      ...prevState,
      ...newState,
    }));
  };

  // Return necessary values and functions
  return {
    state,
    updateState,
  };
};

export default useStateManagement;