const isValidDomain = require("is-valid-domain");
import { isIP } from "is-ip";

const isIpOrDomain = (value: string | undefined) => {
  if (isValidDomain(value)) return true;
  return isIP(value ?? "");
};

export default isIpOrDomain;
