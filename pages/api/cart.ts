import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getCarts } from "../../lib/cart/getCarts";
import { putContent } from "../../lib/cart/putContent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "PUT") {
    const [user, product] = [req.body.uid, req.body.cartData];

    const oldData: any = await getCarts(user);
    const id = new Date().getTime();

    const newData = { ...oldData, [id]: { ...product, user } };
    try {
      const response = await putContent(
        `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${user}.json`,
        newData
      );
      res.status(201).send("성공");
    } catch (error) {
      res.status(500).send({ error: "데이터 PUT 실패" });
    }
  }
  if (req.method === "DELETE") {
    try {
      const { user, productId } = req.body;
      const response = await axios.delete(
        `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${user}/${productId}.json`
      );
      res.status(201).send("성공");
    } catch (error) {
      res.status(500).send({ error: "데이터 삭제 실패" });
    }
  }
}
