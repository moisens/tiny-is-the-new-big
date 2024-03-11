import { useState, useEffect } from "react";
import axios from "axios";
import { isError } from "../utils/is-error";

const useFetch = <T,>(url: string) => {
  const [dataHouse, setDataHouse] = useState<T>({} as T);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const res = await axios.get<T>(url);
        setStatus("resolved");
        setDataHouse(res.data);
      } catch (error) {
        if (isError(error)) {
          setError(error.message);
          setStatus("rejected");
          console.log(error.message);
        }
      }
    };
    fetchData();
  }, [url]);

  return {
    dataHouse,
    status,
    error,
  };
};

export default useFetch;
