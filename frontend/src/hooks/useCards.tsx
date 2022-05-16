import { useContext } from "react";
import { CardsContext } from "../context/CardsContext";

export const useCard = () => {
  const context = useContext(CardsContext);
  if (!context)
    throw new Error(`useCard must be used inside a CardsContext!!!`);
  return context;
};
