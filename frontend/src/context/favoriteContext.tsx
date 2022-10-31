import { createContext, useState } from "react";
import { FavoritesProviderProps, FavoritesContextType } from "../types/interface-context"
import { Productsdata } from "../types/interface-housedata";



const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Productsdata[]>([
    {
      _id: "09HTgT",
  country: "canada",
  price: 12,
  reference: 121,
  size: 11111,
  image: ["https://res.cloudinary.com/dr7qigh2d/image/upload/v1652197821/tiny-housing/tmp-1-1652197818014_rakj8t.jpg"],
  bedroom: 1,
  bathroom: 1,
  kitchen: 1,
  livingroom: 1,
  description: "fhffh",
  statusofhouse: "used",
  yearofconstruction: "2022",
  energyclass: "A",
  pebuniquecode: "1A23EE",
  espec: "fff332",
  typeofheating: "oil heating",
  category: "buy",
    },
    {
      _id: "AzU6",
  country: "canada",
  price: 12,
  reference: 121,
  size: 11111,
  image: ["https://res.cloudinary.com/dr7qigh2d/image/upload/v1658152350/tiny-housing/tmp-1-1658152349719_si2xvy.jpg"],
  bedroom: 1,
  bathroom: 1,
  kitchen: 1,
  livingroom: 1,
  description: "fhffh",
  statusofhouse: "used",
  yearofconstruction: "2022",
  energyclass: "A",
  pebuniquecode: "1A23EE",
  espec: "fff332",
  typeofheating: "oil heating",
  category: "buy",
    },
  ]);

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
