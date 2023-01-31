import { ProductsArrayType } from "../../type/products";
import axios from "axios";

export const getProducts = async (name = "") => {
  try {
    const response = await axios(
      `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/products/${name}.json`
    );

    return response.data;
  } catch (error) {
    return "상품 로딩 에러";
  }
};

export const getProductsWithArray = async () => {
  const products = await getProducts();

  if (typeof products === "string") {
    return products;
  }

  let ArrayProducts: ProductsArrayType = [];

  for (const product in products) {
    ArrayProducts = [products[product], ...ArrayProducts];
  }
  return ArrayProducts;
};
