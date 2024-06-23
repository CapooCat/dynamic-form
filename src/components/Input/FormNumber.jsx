import { memo, useMemo, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import FormInputContainer from "./FormInputContainer";
import useFieldError from "../../hooks/useFieldError";
import FormError from "./FormError";

const FormNumber = memo(function FormNumber(props) {
  const { control } = useFormContext();
  const { invalid, message } = useFieldError(props.name);
  const input = useRef(null);

  return useMemo(
    () => (
      <Controller
        name={props.name}
        control={control}
        defaultValue={null}
        rules={{ required: "Must not be empty", ...props.rules }}
        render={({ field }) => (
          <FormInputContainer title={props.title}>
            <InputNumber
              {...props}
              inputRef={input}
              id={field.name}
              value={field.value ?? null}
              onValueChange={(e) => field.onChange(e.value)}
              onBlur={field.onBlur}
              invalid={invalid}
            />
            <FormError target={input.current} message={message} />
          </FormInputContainer>
        )}
      />
    ),
    [props, message]
  );
});

export default FormNumber;
