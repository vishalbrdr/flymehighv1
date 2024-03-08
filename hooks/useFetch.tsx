import {useEffect, useState} from 'react';

export function useFetch<T>(url: string) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setData(json.weather);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);
  return {isLoading, data};
}
