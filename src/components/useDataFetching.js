import { useState, useEffect } from 'react';

const useDataFetching = (url) => {
  // State to manage fetched data
  const [data, setData] = useState(null);
  // State to manage loading state
  const [isLoading, setIsLoading] = useState(false);
  // State to manage error state
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Cleanup code if needed
    };
  }, [url]);

  // Return necessary values and states
  return { data, isLoading, error };
};

export default useDataFetching;
