import { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";
import { DataProps } from "../types/interface-Dataproducts";




const useFetch = (url: string) => {
  const [data, setData] = useState<DataProps[]>([]);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const response = await axios.get<AxiosResponse>(url);
        setStatus("resolved")
        setData(response.data.products);
        console.log(response.data);
        
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
    data,
    status,
    error,
  };
};

export default useFetch;
