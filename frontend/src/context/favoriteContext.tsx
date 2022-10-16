import { createContext, useState } from "react";
import { FavoritesProviderProps } from "../types/interface-context"
import { FavoriteData, Productsdata } from "../types/interface-housedata";



const FavoritesContext = createContext<FavoriteData>({} as FavoriteData);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoriteData[]>([]);

  let test = "hello from favorites context"

  const addToFavorites = (product: FavoriteData) => {
    const exist = favorites.find(favorite => favorite._id === product._id);
    if (exist) {
      setFavorites(
        favorites.map(favorite => {
          return favorite._id === product._id ? { ...exist, favorite } : favorite
        })
      )
    } else {
      setFavorites([...favorites, product]);
    }
  }


  return <FavoritesContext.Provider value={{
    favorites,
    addToFavorites,
  }}>
    { children }
  </FavoritesContext.Provider>
}

export default FavoritesContext;
