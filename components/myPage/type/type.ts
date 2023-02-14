export interface CartProductType {
  date: string;
  description: string;
  image: string;
  isFeatured: boolean;
  slug: string;
  title: string;
  user: string;
  id?: string;
}
export interface CartType {
  [key: string]: CartProductType;
}
