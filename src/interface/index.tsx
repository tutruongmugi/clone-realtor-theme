export interface User {
  name: string;
  age: string;
}

export interface Home {
  name: string;
  image: string;
  price: number;
  bed: number;
  bath: number;
  sqft: number;
  acreLot: number;
  address: string;
  updatedAt: string;
  seen: boolean;
}

export interface Article {
  name: string;
  image: string;
  titleAction: string;
}
