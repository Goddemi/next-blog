import axios from "axios";

export const postContent = async (url: string, data: object) => {
  try {
    const res = await axios.post(url, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data);
    return res;
  } catch (error) {
    throw new Error();
  }
};
