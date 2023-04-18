import { createContext, useState } from "react";
import { FavoritesProviderProps, FavoritesContextType } from "../types/interface-context"
import { Productsdata } from "../types/interface-housedata";



const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Productsdata[]>([]);

  const addToFavorites = (product: Productsdata) => {
    setFavorites([...favorites, product]);
  }

  const removeFromFavorites = (product: Productsdata) => {
    const newFavorite = favorites?.filter(favorite => favorite._id !== product._id)
    setFavorites(newFavorite)
  }


  return <FavoritesContext.Provider value={{
    favorites,
    addToFavorites,
    removeFromFavorites
  }}>
    { children }
  </FavoritesContext.Provider>
}

export default FavoritesContext;
