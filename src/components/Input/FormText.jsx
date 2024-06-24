import { memo, useMemo, useRef } from "react";
import { InputText } from "primereact/inputtext";
import { Controller, useFormContext } from "react-hook-form";
import FormInputContainer from "./FormInputContainer";
import FormError from "./FormError";

const FormText = memo(function FormText(props) {
  const { control } = useFormContext();
  const input = useRef(null);

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue=""
      rules={{ required: "Must not be empty", ...props.rules }}
      render={({ field, fieldState }) => {
        const { value } = field;
        const { invalid, error } = fieldState;
        const { title } = props;

        return useMemo(
          () => (
            <FormInputContainer title={title}>
              <InputText
                {...field}
                {...props}
                ref={input}
                invalid={invalid}
                value={value ?? ""}
              />
              <FormError target={input.current} message={error?.message} />
            </FormInputContainer>
          ),
          [value, invalid, error]
        );
      }}
    />
  );
});

export default FormText;
