import { useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Chips } from "primereact/chips";
import FormInputContainer from "./FormInputContainer";
import useFieldError from "../../hooks/useFieldError";
import isStringArray from "../../utils/isStringArray";
import FormError from "./FormError";

export default function FormChips(props) {
  const { control } = useFormContext();
  const { invalid, message } = useFieldError(props.name);
  const input = useRef(null);

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue={[]}
      rules={{
        required:
          "Must not be empty, please type and press Enter to insert value to this input",
        ...props.rules,
      }}
      render={({ field }) => {
        return (
          <FormInputContainer title={props.title}>
            <Chips
              {...field}
              {...props}
              inputRef={input}
              invalid={invalid}
              value={isStringArray(field.value) ? field.value : []}
            />
            <FormError target={input.current} message={message} />
          </FormInputContainer>
        );
      }}
    />
  );
}
