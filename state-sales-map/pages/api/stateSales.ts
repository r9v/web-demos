// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { StateSales } from "../../types";
const stateSalesData = require("./stateData.json");

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<StateSales>
) {
  switch (req.method) {
    case "GET":
      return res.status(200).json(stateSalesData);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
