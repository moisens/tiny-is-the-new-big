import { ReactElement, createContext, useState } from "react";
import { Productsdata } from "../types/interface-housedata";

const initialState: Productsdata[] = [];

export interface ChildrenProviderProps {
  children: ReactElement;
}

export type FavoriteContextTypes = {
  favorites: Productsdata[];
  addToFavorites: (product: Productsdata) => void;
  removeFromFavorites: (product: Productsdata) => void;
};

const initialContextState: FavoriteContextTypes = {
  favorites: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
};

const FavoritesContext =
  createContext<FavoriteContextTypes>(initialContextState);

export const FavoritesProvider = ({
  children,
}: ChildrenProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<Productsdata[]>(initialState);

  const addToFavorites = (product: Productsdata) => {
    if (!favorites.some((favorite) => favorite._id === product._id)) {
      setFavorites([...favorites, product]);
    }
  };

  const removeFromFavorites = (product: Productsdata) => {
    const newFavorite = favorites.filter(
      (favorite) => favorite._id !== product._id
    );
    setFavorites(newFavorite);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
