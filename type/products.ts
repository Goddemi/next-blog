export interface ProductType {
  slug: string;
  title: string;
  image: string;
  date: string;
  description: string;
  isFeatured: boolean;
}

export interface AllProductsType {
  [key: string]: ProductType;
}

export type ProductsArrayType = ProductType[];
