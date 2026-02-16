import getConfig from "next/config";
const jwt = require("jsonwebtoken");
import { apiHandler } from "../../../helpers/api";
import { NextApiRequest, NextApiResponse } from "next";

const { serverRuntimeConfig } = getConfig();

export default apiHandler(handler);

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "POST":
      return authenticate();
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  function authenticate() {
    const { userName, password } = req.body;
    if (userName !== "test" && password !== "test")
      throw "Username or password is incorrect";

    const token = jwt.sign({}, serverRuntimeConfig.secret, {
      expiresIn: "1d",
    });
    return res.status(200).json({
      userName,
      token,
    });
  }
}
