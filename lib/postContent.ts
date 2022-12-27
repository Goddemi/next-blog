import axios from "axios";

export const postContent = async (url: string, data: object) => {
  axios
    .post(url, data)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
