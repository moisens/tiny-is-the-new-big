import { createContext, useState } from "react";
import useFetch from "../hooks/useFetch";
import { DataProps, LocationProps, CardContextProvider, CardData } from "../types/interface-Dataproducts";

type DefaultProps = {
  products: []
}

export const CardContext = createContext(undefined)

export const CardProvider = ({ children }: CardContextProvider) => {
  
  const categories: string = "buy";
  const { dataHouse, status, error } = useFetch<DataProps[]>(`/api/v1/products?category=${categories}`, []);
  
 

  


  return <CardContext.Provider value={{ dataHouse }}>
    { children }
  </CardContext.Provider>
}