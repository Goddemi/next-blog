import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { getCarts } from "../../lib/cart/getCarts";
import { putContent } from "../../lib/cart/putContent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== "PUT") {
    return;
  }

  const [user, product] = [req.body.uid, req.body.cartData];

  const oldData: any = await getCarts(user);
  const id = new Date().getTime();

  const newData = { ...oldData, [id]: product };
  try {
    const response = await putContent(
      `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/cart/${user}.json`,
      newData
    );
    res.status(201).json({ message: "api route : good" });
  } catch (error) {
    console.log(error);
  }
}
