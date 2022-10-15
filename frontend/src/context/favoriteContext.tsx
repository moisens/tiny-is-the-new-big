import { createContext, useState } from "react";
import { FavoritesProviderProps } from "../types/interface-context"
import { Housedata } from "../types/interface-housedata";

interface FavoriteProps  {
  readonly _id: string;
  favorites: string[];
}

const FavoritesContext = createContext({});

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoriteProps[]>([]);

  let test = "hello from favorites context"

  const addToFavorites = (product) => {
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
    test
  }}>
    { children }
  </FavoritesContext.Provider>
}

export default FavoritesContext;
