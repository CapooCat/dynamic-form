import { memo, useMemo, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Chips } from "primereact/chips";
import FormInputContainer from "./FormInputContainer";
import isStringArray from "../../utils/isStringArray";
import FormError from "./FormError";

const FormChips = memo(function FormChips(props) {
  const { control } = useFormContext();
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
      render={({ field, fieldState }) => {
        const { value } = field;
        const { invalid, error } = fieldState;
        const { title } = props;

        return useMemo(
          () => (
            <FormInputContainer title={title}>
              <Chips
                {...field}
                {...props}
                inputRef={input}
                invalid={invalid}
                value={isStringArray(value) ? value : []}
              />
              <FormError target={input.current} message={error?.message} />
            </FormInputContainer>
          ),
          [value, invalid, error?.message]
        );
      }}
    />
  );
});

export default FormChips;
