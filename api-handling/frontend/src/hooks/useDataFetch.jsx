import { useState, useEffect } from "react";
import axios from "axios";

const useDataFetch = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setProducts([]);
    setError(false);
    setLoading(true);
    (async () => {
      try {
        const res = await axios.get(urlPath, { signal: controller.signal });
        console.log(res.data);
        setProducts(res.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
    return () => {
      controller.abort();
    };
  }, [urlPath]);

  return [products, error, loading];
};

export default useDataFetch;
