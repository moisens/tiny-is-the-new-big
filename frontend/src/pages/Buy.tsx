import "../components/home/home.scss";
import Headers from "../components/header/Headers";
import { HeaderBuy } from "../utils/headers-utils";
import Cardspage from "../components/cardspage/Cardspages";
import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

{
  /**products: Productsdata[]
    totalHouses: string; */
}
interface Housedata {
  productData: HousedataType;
}

type HousedataType = {
  products: Productsdata[];
  totalHouses: string;
};

type Productsdata = {
  readonly _id: string;
  country: string;
  price: number;
  ref: number;
  size: number;
  image: string[];
  bedroom: number;
  bathroom: number;
  kitchen: number;
  livingroom: number;
  description: string;
  statusofhouse: string;
  yearofconstruction: string;
  energyclass: string;
  pebuniquecode: string;
  espec: string;
  typeofheating: string;
  category: string;
};

const Buy = () => {
  const [datas, setDatas] = useState<HousedataType>({} as HousedataType);
  const [status, setStatus] = useState<string>("iddle");
  const [error, setError] = useState<unknown>(null)

  const fetchHouses = async () => {
    try {
      const categories = "buy";
      setStatus("pending");
      const response = await fetch(`/api/v1/products?category=${categories}`);
      if (!response.ok) {
        throw new Error(`unable to fetch data!`);
      }
      const jsonhouse = await response.json();
      setStatus("resolved")
      setDatas(jsonhouse);
    } catch (error) {
      setError(error)
      setStatus("rejected")
      console.log(error);
      
    }
  };
  
  useEffect(() => {
    fetchHouses();
  }, [])

  return (
    <div className="home-container">
      <Headers dataHeaders={HeaderBuy} />
      <Cardspage productData={datas} />
    </div>
  );
};

export default Buy;
