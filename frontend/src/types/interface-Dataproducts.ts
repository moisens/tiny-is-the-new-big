export interface DataProps {
  products: {
    _id: string;
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
  }[];
}

export interface LocationProps {
  _id: string;
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

/*
"country": "Canada, AB",
    "price": 188000,
    "ref": 1099,
    "size": 505.904,
    "image": ["https://res.cloudinary.com/dr7qigh2d/image/upload/v1652195541/tiny-housing/tmp-1-1652195541257_wc0bsm.jpg","https://res.cloudinary.com/dr7qigh2d/image/upload/v1652198104/tiny-housing/tmp-1-1652198097680_jygmdb.jpg","https://res.cloudinary.com/dr7qigh2d/image/upload/v1652197821/tiny-housing/tmp-1-1652197818014_rakj8t.jpg","https://res.cloudinary.com/dr7qigh2d/image/upload/v1652821241/tiny-housing/tmp-2-1652821240236_u4riso.jpg","https://res.cloudinary.com/dr7qigh2d/image/upload/v1658093438/tiny-housing/tmp-2-1658093438109_hajaqp.jpg"],
    "bedroom": 2,
    "bathroom": 1,
    "kitchen": 1,
    "livingroom": 1,
    "description": "Modus stainless steel doctus ea vis, sed luxury democritum at, vidit cozy partiendo mel cu. Vel an one-of-a-kind utroque antiopam, ius ad falli location location location suavitate. No Carrara marble persius mei, no historic dolor maiestatis adolescens. ",
    "statusofhouse": "new",
    "yearofconstruction": "Feb 2021",
    "energyclass": "A",
    "pebuniquecode": "20711406000897260-22-6",
    "espec": "686 Kwh/m2/year",
    "typeofheating": "Heat pumps",
    "category": "buy"

*/
