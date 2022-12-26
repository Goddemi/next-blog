// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { AllProductsType } from "../../type/products";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any> //타입수정
) {
  // let productsData;
  // if (req.method === "GET") {
  //   try {
  //     const response = await axios(
  //       "https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/products.json"
  //     );
  //     productsData = response.data.products;
  //   } catch {}
  // }
  // res.status(200).json({ products: productsData });
}
