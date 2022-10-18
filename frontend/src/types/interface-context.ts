import { Productsdata } from "../types/interface-housedata"

export interface FavoritesProviderProps {
  children: React.ReactNode;
}


export type FavoritesContextType = {
  favorites: Productsdata[];
  addToFavorites: (product: Productsdata) => void;

};