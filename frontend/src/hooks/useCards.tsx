import { useContext } from "react";
import { CardContext } from "../context/CardsContext";

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context)
    throw new Error(`useCard must be used inside a CardsContext!!!`);
  return context;
};
