import { useContext } from "react";
import FavoritesContext from "../context/favoriteContext";

const useFavorite = () => {
  const context = useContext(FavoritesContext);
  if (!context)
    throw new Error(
      `useFavorite must be used within FavoritesProvider context`
    );
  return context;
};

export default useFavorite;
