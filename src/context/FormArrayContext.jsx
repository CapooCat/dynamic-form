import { createContext, useContext, useEffect } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import processArray from "../utils/processArray";

const FormArrayContext = createContext();

export const useFormArray = () => {
  return useContext(FormArrayContext);
};

export function FormArrayProvider({ children, name }) {
  const { control } = useFormContext();

  const methods = useFieldArray({
    control: control,
    name: name,
  });

  return (
    <FormArrayContext.Provider value={{ ...methods, name }}>
      {children}
    </FormArrayContext.Provider>
  );
}
