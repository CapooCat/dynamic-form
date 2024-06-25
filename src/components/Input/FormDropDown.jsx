import { useMemo, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Controller, useFormContext } from "react-hook-form";
import FormInputContainer from "./FormInputContainer";
import FormError from "./FormError";

const FormDropDown = function FormDropDown(props) {
  const { control } = useFormContext();
  const input = useRef(null);

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue={null}
      rules={{ required: "Must not be empty", ...props.rules }}
      render={({ field, fieldState }) => {
        const { name, value } = field;
        const { invalid, error } = fieldState;
        const { title, options } = props;

        return useMemo(
          () => (
            <FormInputContainer title={title}>
              <Dropdown
                {...field}
                {...props}
                ref={input}
                id={name}
                value={value ?? null}
                options={options ?? []}
                invalid={invalid}
                resetFilterOnHide
                filter
              />
              <FormError
                target={input.current?.getElement()}
                message={error?.message}
              />
            </FormInputContainer>
          ),
          [options, value, invalid, error]
        );
      }}
    />
  );
};

export default FormDropDown;
