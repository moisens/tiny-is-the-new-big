import { useState ,createContext } from "react";
import { DataContextProviderProps, DataProps, PagecontextProps , CardProps} from "../types/interface-Dataproducts";
import useFetch from "../hooks/useFetch";

export const CardsContext = createContext({} as CardProps);
//export const PageContext = createContext<PagecontextProps | null>(null);
export const CardsProvider = ({ children }: DataContextProviderProps) => {
  //const [state, setState] = useState<DataProps | null>(null)
  const categories = "buy";
  const {data, status, error} = useFetch(`http://localhost:5000/api/v1/products?category=${categories}`)

  return (
    <CardsContext.Provider value={{
      data, status, error
    }}>
      {children}
    </CardsContext.Provider>
  )
}

export default CardsContext;