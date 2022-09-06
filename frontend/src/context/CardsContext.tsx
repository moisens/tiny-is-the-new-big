import { useState , useReducer, createContext } from "react";
import { DataContextProviderProps, DataProps, PagecontextProps , CardProps} from "../types/interface-Dataproducts";
import useFetch from "../hooks/useFetch";

export const CardsContext = createContext({} as CardProps);
//export const PageContext = createContext<PagecontextProps | null>(null);
export const CardsProvider = ({ children }: DataContextProviderProps) => {
  //const [state, setState] = useState<DataProps | null>(null)
  const [state, dispatch] = useReducer(reducer, initialState);

  //get buy tiny house
  
  //get rent tiny house

  return (
    <CardsContext.Provider value={{
    }}>
      {children}
    </CardsContext.Provider>
  )
}

export default CardsContext;