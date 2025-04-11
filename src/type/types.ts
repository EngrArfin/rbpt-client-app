// types.ts
export interface IProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  brand?: string;
  stock?: number;
}
