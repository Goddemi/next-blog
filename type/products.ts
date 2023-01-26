export interface ProductType {
  slug: string;
  title: string;
  image: string;
  date: string;
  description: string;
  isFeatured: boolean;
  id?: string;
  user?: string;
}

export interface AllProductsType {
  [key: string]: ProductType;
}

export type ProductsArrayType = ProductType[];
