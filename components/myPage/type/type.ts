import { User } from "firebase/auth";

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

export interface InfoChangeType {
  user: User;
  recheckPasswordHandler: () => Promise<any>;
}
