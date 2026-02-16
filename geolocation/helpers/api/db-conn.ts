import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export { connectDB };

const connectDB =
  (handler: (req: NextApiRequest, res: NextApiResponse) => void) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (mongoose.connections[0].readyState) {
        return handler(req, res);
      }

      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}`
      );
      return handler(req, res);
    } catch (e) {
      console.error(e);
      throw new Error();
    }
  };
