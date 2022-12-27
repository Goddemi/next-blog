// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { AllProductsType } from "../../type/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> //타입수정
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const content = req.body.content;

    const data = {
      id: new Date(),
      email,
      content,
    };

    axios
      .post(
        "https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json",
        data
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    res.status(201).json({ message: "good", email: data });
  }
}

// let productsData;
// if (req.method === "POST") {
//   try {
//     const response = await axios(
//       "https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
//     );
//     productsData = response.data.products;
//   } catch {}
// }
// res.status(200).json({ products: productsData });
