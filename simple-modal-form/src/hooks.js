import { useFormikContext } from "formik";

export const useValidationError = (name) => {
  const getProp = (obj, key) => {
    return key.split(".").reduce((a, b) => (a !== undefined ? a[b] : a), obj);
  };
  const { errors, touched } = useFormikContext();

  return getProp(errors, name) && getProp(touched, name)
    ? getProp(errors, name)
    : undefined;
};
