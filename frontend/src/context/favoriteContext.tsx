import { createContext, useState } from "react";
import { FavoritesProviderProps, FavoritesContextType } from "../types/interface-context"
import { Productsdata } from "../types/interface-housedata";



const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Productsdata[]>([]);

  const addToFavorites = (product: Productsdata) => {
    const exist = favorites.find(favorite => favorite._id === product._id);
    if (exist) {
      setFavorites(
        favorites?.map(favorite => {
          return favorite._id === product._id ? { ...exist, favorite } : favorite
        })
      )
    } else {
      setFavorites([...favorites, product]);
      console.log("CONTEXT: ",favorites);
    }
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
