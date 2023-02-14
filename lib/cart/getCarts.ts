import axios from "axios";

export const getCarts = async (user: string) => {
  try {
    const URL = `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${user}.json`;
    const response = await axios(URL);
    if (!response.data) {
      return [];
    }
    return response.data;
  } catch (error) {
    return "장바구니 데이터 로딩 오류";
  }
};
