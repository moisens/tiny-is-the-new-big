import { useState, useEffect } from "react";
import axios from "axios";
import { DataProps, LocationProps } from "../types/interface-Dataproducts";




const useFetch = (url: string) => {
  const [dataHouse, setDataHouse] = useState<DataProps[]>([]);
  const [dataLocation, setDataLocation] = useState<DataProps[]>([]);
  const [status, setStatus] = useState<string>("idle");
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus("pending");
        const { data: datahouse } = await axios.get<DataProps[]>(url);
        const { data: datalocation } = await axios.get<LocationProps[]>(url);
        setStatus("resolved")
        setDataHouse(datahouse.products);
        setDataLocation(datalocation.products);
        
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
    dataLocation,
    status,
    error,
  };
};

export default useFetch;
