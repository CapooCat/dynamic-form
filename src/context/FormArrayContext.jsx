import { createContext, useContext } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

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
