import { useMemo, useRef } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import FormInputContainer from "./FormInputContainer";
import FormError from "./FormError";

function InputNumberWithRange({
  thisField,
  is,
  selectedField,
  placeholder,
  fieldState,
  props,
}) {
  const { name, value, onBlur, onChange } = thisField;
  const { invalid, error } = fieldState;
  const { control } = useFormContext();
  const input = useRef(null);
  const rangeValue = useWatch({
    control,
    name: selectedField,
  });

  const insertRangeType = (rangeValue, is) => {
    switch (is) {
      case "notMoreThan":
        return { max: rangeValue };
      case "notLessThan":
        return { min: rangeValue };
    }
  };

  return useMemo(
    () => (
      <>
        <InputNumber
          {...props}
          {...insertRangeType(rangeValue, is)}
          onValueChange={(e) => onChange(e.value)}
          value={value ?? null}
          className="input-number-range"
          onBlur={onBlur}
          placeholder={placeholder}
          id={name}
          invalid={invalid}
          inputRef={input}
        />
        <FormError target={input.current} message={error?.message} />
      </>
    ),
    [value, rangeValue, invalid, error?.message]
  );
}

const FormMinMax = function FormMinMax(props) {
  const { control } = useFormContext();

  return (
    <FormInputContainer title={props.title}>
      <div className="flex gap-2 md:w-[200px] w-full">
        <Controller
          name={`${props.name}.min`}
          control={control}
          defaultValue={null}
          rules={{ required: "Must not be empty", ...props.rules }}
          render={({ field, fieldState }) => {
            const { name, minplaceholder } = props;

            return (
              <InputNumberWithRange
                thisField={field}
                is="notMoreThan"
                selectedField={`${name}.max`}
                placeholder={minplaceholder}
                fieldState={fieldState}
                props={props}
              />
            );
          }}
        />

        <Controller
          name={`${props.name}.max`}
          control={control}
          defaultValue={null}
          rules={{ required: "Must not be empty", ...props.rules }}
          render={({ field, fieldState }) => {
            const { name, maxplaceholder } = props;

            return (
              <InputNumberWithRange
                thisField={field}
                is="notLessThan"
                selectedField={`${name}.min`}
                placeholder={maxplaceholder}
                fieldState={fieldState}
                props={props}
              />
            );
          }}
        />
      </div>
    </FormInputContainer>
  );
};

export default FormMinMax;
