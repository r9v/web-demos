import { NextApiRequest, NextApiResponse } from "next";
import { errorHandler, jwtMiddleware } from ".";

export { apiHandler };

function apiHandler(
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      await jwtMiddleware(req, res);
      await handler(req, res);
    } catch (err) {
      errorHandler(err, res);
    }
  };
}
