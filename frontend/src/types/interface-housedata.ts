export interface Housedata {
  productData: HousedataType;
  statusType: StatusType
}

export type HousedataType = {
  products: Productsdata[];
  totalHouses: string;
  product: Productsdata//Single product _id
  favorites: string[];
};


export type Productsdata = {
  readonly _id: string;
  country: string;
  price: number;
  reference: number;
  size: number;
  image: string[];
  bedroom: number;
  bathroom: number;
  kitchen: number;
  livingroom: number;
  description: string;
  statusofhouse: string;
  yearofconstruction: string;
  energyclass: string;
  pebuniquecode: string;
  espec: string;
  typeofheating: string;
  category: string;
};

export type StatusType = "iddle" | "pending" | "resolved" | "rejected";
export type TinyError = "unknown";
export interface IsFetchingError {
  message: string;
}


export interface FavoriteData {
  _id: string;
  favorites: Productsdata[]
  product: Productsdata
  addToFavorites: (product: FavoriteData) => void;
}