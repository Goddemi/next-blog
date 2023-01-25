import type { NextApiRequest, NextApiResponse } from "next";
import { putContent } from "../../lib/cart/putContent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "PUT") {
    const data = [{ name: req.body.title }];

    try {
      const response = await putContent(
        `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${req.body.uid}.json`,
        data
      );
      res.status(201).json({ message: "api route : good" });
    } catch (error) {
      console.log(error);
    }
  }
}
