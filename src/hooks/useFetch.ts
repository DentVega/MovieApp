import { useEffect, useState } from 'react';

const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [controller, setController] = useState<AbortController | null>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);

    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        if (error.name === 'AbortError') {
          return;
        } else {
          setError(error);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => abortController.abort();
  }, []);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError('Request cancelled');
    }
  };

  return { data, loading, error, handleCancelRequest };
};

export default useFetch;
