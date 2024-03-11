import { ReactElement, createContext, useState, useEffect } from "react";
import { Productsdata } from "../types/interface-housedata";

const initialState: Productsdata[] = [];

export interface ChildrenProviderProps {
  children: ReactElement;
}

export type FavoriteContextTypes = {
  favorites: Productsdata[];
  likedTinyHouse: Productsdata[];
  addToFavorites: (product: Productsdata) => void;
  removeFromFavorites: (product: Productsdata) => void;
  toggleLikeTinyHouse: (productId: Productsdata) => void;
};

const initialContextState: FavoriteContextTypes = {
  favorites: [],
  likedTinyHouse: [],
  addToFavorites: () => {},
  removeFromFavorites: () => {},
  toggleLikeTinyHouse: () => {},
};

interface CustomWindow extends Window {
  localStorage: Storage;
}

const FavoritesContext =
  createContext<FavoriteContextTypes>(initialContextState);

export const FavoritesProvider = ({
  children,
}: ChildrenProviderProps): ReactElement => {
  const [favorites, setFavorites] = useState<Productsdata[]>(() =>
    JSON.parse(
      (window as CustomWindow).localStorage.getItem("tiny-house") ||
        JSON.stringify(initialState)
    )
  );
  const [likedTinyHouse, setLikedTinyHouse] = useState<Productsdata[]>(() =>
    JSON.parse(
      (window as CustomWindow).localStorage.getItem("liked-tiny-house") ||
        JSON.stringify(initialState)
    )
  );

  useEffect(() => {
    (window as CustomWindow).localStorage.setItem(
      "tiny-house",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  useEffect(() => {
    (window as CustomWindow).localStorage.setItem(
      "liked-tiny-house",
      JSON.stringify(likedTinyHouse)
    );
  }, [likedTinyHouse]);

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

  const toggleLikeTinyHouse = (product: Productsdata) => {
    if (likedTinyHouse.includes(product)) {
      setLikedTinyHouse(
        likedTinyHouse.filter((liked) => liked._id !== product._id)
      );
    } else {
      setLikedTinyHouse([...likedTinyHouse, product]);
    }
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        likedTinyHouse,
        toggleLikeTinyHouse,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
