import { memo, useMemo, useRef } from "react";
import { Calendar } from "primereact/calendar";
import { Controller, useFormContext } from "react-hook-form";
import FormInputContainer from "./FormInputContainer";
import useFieldError from "../../hooks/useFieldError";
import isDateArray from "../../utils/isDateArray";
import FormError from "./FormError";

function checkDateType(mode, value) {
  switch (mode) {
    case "range":
      return isDateArray(value) ? value : [];
    default:
      return value;
  }
}

const FormDate = memo(function FormDate(props) {
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
            <Calendar
              {...field}
              {...props}
              showIcon
              inputRef={input}
              invalid={invalid}
              yearRange="1900:2100"
              yearNavigator={true}
              monthNavigator={true}
              value={checkDateType(props.selectionMode, field.value)}
            />
            <FormError target={input.current} message={message} />
          </FormInputContainer>
        )}
      />
    ),
    [props, message]
  );
});

export default FormDate;
