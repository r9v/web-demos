import { apiHandler, connectDB } from "../../../helpers/api";
import { NextApiRequest, NextApiResponse } from "next";
import GeoModel from "../../../models/Geo.model";
import isIpOrDomain from "../../../helpers/isIpOrDomain";
import axios from "axios";

export default apiHandler(connectDB(handler));

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return get(
        parseInt(req.query.page as string) || 1,
        parseInt(req.query.limit as string) || 10
      );
    case "POST":
      return create(req.query.ipOrDomain as string);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function get(page: number, limit: number) {
    const options = {
      page,
      limit,
    };
    try {
      // @ts-ignore:next-line
      return res.status(200).json(await GeoModel.paginate({}, options));
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }

  async function create(ipOrDomain: string) {
    const callIPStack = async (ipOrDomain: string) => {
      const url = `http://api.ipstack.com/${ipOrDomain}?access_key=${process.env.IPSTACK_APIKEY}`;
      try {
        const response = await axios.get(url);
        const data = response.data;
        if (data.success == false) throw new Error(JSON.stringify(data));
        console.log(data);
        return {
          ip: data.ip,
          continent_name: data.continent_name,
          country_name: data.country_name,
          city: data.city,
          latitude: data.latitude,
          longitude: data.longitude,
        };
      } catch (error) {
        console.error(error);
        throw new Error();
      }
    };

    if (!isIpOrDomain(ipOrDomain))
      throw "Query parameter ipOrDomain is required and must be a valid IP Address or a valid Domain";

    const newGeo = await callIPStack(ipOrDomain);
    try {
      const result = await GeoModel.create(newGeo);
      return res.status(201).json({ result });
    } catch (error) {
      console.error(error);
      throw new Error();
    }
  }
}
