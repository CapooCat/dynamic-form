import { memo, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Controller, useFormContext } from "react-hook-form";
import FormInputContainer from "./FormInputContainer";
import useFieldError from "../../hooks/useFieldError";
import FormError from "./FormError";

export default function FormText(props) {
  const { control } = useFormContext();
  const { invalid, message } = useFieldError(props.name);
  const input = useRef(null);

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue=""
      rules={{ required: "Must not be empty", ...props.rules }}
      render={({ field }) => (
        <FormInputContainer title={props.title}>
          <InputText
            {...field}
            {...props}
            ref={input}
            invalid={invalid}
            value={field.value ?? ""}
          />
          <FormError target={input.current} message={message} />
        </FormInputContainer>
      )}
    />
  );
}
