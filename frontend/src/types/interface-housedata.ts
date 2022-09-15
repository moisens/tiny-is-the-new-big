export interface Housedata {
  productData: HousedataType;
}

export type HousedataType = {
  products: Productsdata[];
  totalHouses: string;
};

export type Productsdata = {
  readonly _id: string;
  country: string;
  price: number;
  ref: number;
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


