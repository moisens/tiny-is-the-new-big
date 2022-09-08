import { createContext } from "react";
import useFetch from "../hooks/useFetch";
import { DataProps, LocationProps, CardContextProvider, CardData } from "../types/interface-Dataproducts";



export const CardContext = createContext<CardData[] | null>(null)

export const CardProvider = ({ children }: CardContextProvider) => {
  const categories: string = "buy";
  const { dataHouse, status } = useFetch<DataProps[]>(`/api/v1/products?category=${categories}`, []);

  const getBuyHouse = () => {
    
    dataHouse.products.map(house => { console.log(house)
     })
  }


  return <CardContext.Provider value={{dataHouse}}>
    { children }
  </CardContext.Provider>
}