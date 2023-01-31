import axios from "axios";

export const putContent = async (url: string, data: any) => {
  try {
    const res = await axios.put(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return res;
  } catch (error) {
    return "장바구니 입력 에러";
  }
};
