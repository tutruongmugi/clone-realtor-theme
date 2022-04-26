export interface User {
  username: string;
  name: string;
  phone: string;
}

export interface Home {

  name?: string;
  image?: string;
  price?: number;
  bed?: number;
  bath?: number;
  sqft?: number;
  acrelot?: number;
  address?: string;
  updatedAt?: string;
  seen?: boolean;
}

export interface Article {
  name: string;
  image: string;
  titleAction: string;
}

export interface Location {
  name: string;
  price: number;
}
