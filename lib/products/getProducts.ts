import { ProductsArrayType } from "../../type/products";
import axios from "axios";

export const getProducts = async (name = "") => {
  const response = await axios(
    `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/products/${name}.json`
  );

  return response.data;
};

export const getProductsWithArray = async () => {
  const products = await getProducts();

  let ArrayProducts: ProductsArrayType = [];

  for (const product in products) {
    ArrayProducts = [products[product], ...ArrayProducts];
  }
  return ArrayProducts;
};
