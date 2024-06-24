import { memo, useMemo, useRef } from "react";
import { Calendar } from "primereact/calendar";
import { Controller, useFormContext } from "react-hook-form";
import FormInputContainer from "./FormInputContainer";
import isDateArray from "../../utils/isDateArray";
import FormError from "./FormError";

function initValueByMode(mode, value) {
  switch (mode) {
    case "range":
      return isDateArray(value) ? value : [];
    default:
      return value;
  }
}

const FormDate = memo(function FormDate(props) {
  const { control } = useFormContext();
  const input = useRef(null);

  return (
    <Controller
      name={props.name}
      control={control}
      defaultValue={null}
      rules={{ required: "Must not be empty", ...props.rules }}
      render={({ field, fieldState }) => {
        const { value } = field;
        const { invalid, error } = fieldState;
        const { title, selectionMode } = props;

        return useMemo(
          () => (
            <FormInputContainer title={title}>
              <Calendar
                {...field}
                {...props}
                showIcon
                inputRef={input}
                invalid={invalid}
                yearRange="1900:2100"
                yearNavigator={true}
                monthNavigator={true}
                value={initValueByMode(selectionMode, value)}
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

export default FormDate;
