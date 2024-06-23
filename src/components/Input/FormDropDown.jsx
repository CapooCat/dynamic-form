import { memo, useMemo, useRef } from "react";
import { Dropdown } from "primereact/dropdown";
import { Controller, useFormContext } from "react-hook-form";
import FormInputContainer from "./FormInputContainer";
import useFieldError from "../../hooks/useFieldError";
import FormError from "./FormError";

const FormDropDown = memo(function FormDropDown(props) {
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
            <Dropdown
              {...field}
              {...props}
              ref={input}
              id={props.name}
              value={field.value ?? null}
              options={props.options ?? []}
              resetFilterOnHide
              filterInputAutoFocus
              filter
              invalid={invalid}
            />
            <FormError target={input.current?.getElement()} message={message} />
          </FormInputContainer>
        )}
      />
    ),
    [props, message]
  );
});

export default FormDropDown;
