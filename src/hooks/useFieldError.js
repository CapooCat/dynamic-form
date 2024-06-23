import { useFormContext, useFormState } from "react-hook-form";
import getError from "../utils/getError";

export default function useFieldError(name) {
  const { control } = useFormContext();
  const { errors } = useFormState();
  const message = getError(name, errors)?.message;
  const invalid = message ? true : false;

  return { invalid, message };
}
