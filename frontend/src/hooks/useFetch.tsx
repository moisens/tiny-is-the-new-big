import { useState, useEffect } from "react";
import axios from "axios";




const useFetch = <T,>(url: string, initialState: T) => {
  const [dataHouse, setDataHouse] = useState<T>(initialState);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const { data } = await axios.get<T>(url);
        setStatus("resolved")
        setDataHouse(data);
        
      } catch (error) {
        if (error instanceof Error) {
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
