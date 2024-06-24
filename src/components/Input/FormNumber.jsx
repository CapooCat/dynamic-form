import { memo, useMemo, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import FormInputContainer from "./FormInputContainer";
import FormError from "./FormError";

const FormNumber = memo(function FormNumber(props) {
  const { control } = useFormContext();
  const input = useRef(null);

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue={null}
      rules={{ required: "Must not be empty", ...props.rules }}
      render={({ field, fieldState }) => {
        const { name, value, onBlur, onChange } = field;
        const { invalid, error } = fieldState;
        const { title } = props;

        return useMemo(
          () => (
            <FormInputContainer title={title}>
              <InputNumber
                {...props}
                inputRef={input}
                id={name}
                value={value ?? null}
                onValueChange={(e) => onChange(e.value)}
                onBlur={onBlur}
                invalid={invalid}
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

export default FormNumber;
