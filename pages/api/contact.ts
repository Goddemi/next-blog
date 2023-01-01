import type { NextApiRequest, NextApiResponse } from "next";
import { postContent } from "../../lib/postContent";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "POST") {
    const email = req.body.email;
    const content = req.body.content;

    if (!email || !email.includes("@") || !content || content.trim() === "") {
      res.status(422).json({ message: "Invalid Input" });
      return;
    }

    const data = {
      id: new Date(),
      email,
      content,
    };

    postContent(
      `https://youneedverse-e9492-default-rtdb.asia-southeast1.firebasedatabase.app/contact.json`,
      data
    );

    res.status(201).json({ message: "good", email: data });
  }
}
