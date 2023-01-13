import { StatusType } from "./interface-housedata";

export interface Locations {
  locationDatas: LocationDataType;
  status: string;
  error: unknown;
}

export type LocationDataType = {
  locations: ProductLocationsdata[];
  totalLocations: string;
};

export type CardDataLocationType = {
  location: ProductLocationsdata
}

export type ProductLocationsdata = {
  readonly _id: string;
  country: string;
  description: string;
  image: string[];
  googolLink: string;
  reviewersImages: string[];
  averageRating: number;
  numOfReviews: number;
};
