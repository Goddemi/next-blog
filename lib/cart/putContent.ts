import axios from "axios";

export const putContent = async (url: string, data: object) => {
  try {
    const res = await axios.put(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    throw new Error();
  }
};
