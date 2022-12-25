import axios from "axios";

export const getProducts = async () => {
  const response = await axios(
    "https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
  );

  return response.data;
};
