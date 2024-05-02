import { useEffect, useState } from 'react';

const useGetRequest = (url, refresh) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setIsLoading(false));
  }, [url, refresh]);

  return [data, isLoading, error];
};

export default useGetRequest;
