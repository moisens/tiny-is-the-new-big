import { StatusType } from "./interface-housedata";

export interface Locations {
  locationDatas: LocationDataType;
  statusType: StatusType;
}

export type LocationDataType = {
  locations: ProductLocationsdata[];
  totalLocations: string;
};

export type ProductLocationsdata = {
  readonly _id: string;
  country: string;
  description: string;
  image: string[];
  reviewersImages: string[];
  averageRating: number;
  numOfReviews: number;
};
