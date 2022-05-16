export interface DataProps {
  _id: string;
  name: string;
  country: string;
  price: number;
  ref: number;
  size: number;
  image: string[];
  bedroom: number;
  bathroom: number;
  category: string;
}

export interface CardProps {
  data: DataProps[];
  status: string;
  error: unknown;
}

export interface DataContextProviderProps {
  children: React.ReactNode
}

export interface PagecontextProps {
  state: DataProps | null,
  setState: React.Dispatch<React.SetStateAction<DataProps | null>>
}



