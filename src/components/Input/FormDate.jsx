import { useRef } from "react";
import { Calendar } from "primereact/calendar";
import { Controller, useFormContext } from "react-hook-form";
import FormInputContainer from "./FormInputContainer";
import useFieldError from "../../hooks/useFieldError";
import isDateArray from "../../utils/isDateArray";
import FormError from "./FormError";

export default function FormDate(props) {
  const { control } = useFormContext();
  const { invalid, message } = useFieldError(props.name);
  const input = useRef(null);

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue={null}
      rules={{ required: "Must not be empty", ...props.rules }}
      render={({ field }) => (
        <FormInputContainer title={props.title}>
          <Calendar
            {...field}
            {...props}
            showIcon
            inputRef={input}
            invalid={invalid}
            value={isDateArray(field.value) ? field.value : []}
          />
          <FormError target={input.current} message={message} />
        </FormInputContainer>
      )}
    />
  );
}
