import { useState } from 'react';

const useNavigation = () => {
  // State to manage navigation state
  const [currentRoute, setCurrentRoute] = useState('/');

  // Function to navigate to a new route
  const navigateTo = (route) => {
    setCurrentRoute(route);
  };

  // Return necessary values and functions
  return {
    currentRoute,
    navigateTo,
  };
};

export default useNavigation;