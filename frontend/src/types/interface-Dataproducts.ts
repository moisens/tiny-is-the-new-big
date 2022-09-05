export interface DataProps {
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
}

export interface LocationProps {
  readonly _id: string;
  country: string;
  description: string;
  image: string[];
  reviewersImages: string[];
  averageRating: number;
  numOfReviews: number;
}

export interface CardProps {
  data: DataProps[];
  status: string;
  error: unknown;
}

export interface DataContextProviderProps {
  children: React.ReactNode;
}

export interface PagecontextProps {
  state: DataProps | null;
  setState: React.Dispatch<React.SetStateAction<DataProps | null>>;
}


