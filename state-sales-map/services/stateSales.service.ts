import getConfig from "next/config";

import { fetchWrapper } from "./fetch-wrapper";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/stateSales`;

export const stateSalesService = {
  get,
};

function get() {
  return fetchWrapper.get(baseUrl);
}
