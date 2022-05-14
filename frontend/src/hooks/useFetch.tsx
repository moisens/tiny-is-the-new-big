import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("null");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const response = await axios.get(url);
        setData(response.data);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
          setStatus("rejected");
        }
      }
    };
    fetchData();
  }, [url]);

  return {
    data,
    status,
    error,
  };
};

export default useFetch;
