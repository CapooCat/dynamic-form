import { memo, useMemo, useRef } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import { InputNumber } from "primereact/inputnumber";
import FormInputContainer from "./FormInputContainer";
import useFieldError from "../../hooks/useFieldError";
import FormError from "./FormError";

function InputNumberWithRange({
  thisField,
  is,
  selectedField,
  placeholder,
  props,
}) {
  const { control } = useFormContext();
  const rangeValue = useWatch({
    control,
    name: selectedField,
  });
  const { invalid, message } = useFieldError(thisField.name);
  const input = useRef(null);

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
          onValueChange={(e) => thisField.onChange(e.value)}
          value={thisField.value ?? null}
          className="input-number-range"
          onBlur={thisField.onBlur}
          placeholder={placeholder}
          id={thisField.name}
          invalid={invalid}
          inputRef={input}
        />
        <FormError target={input.current} message={message} />
      </>
    ),
    [rangeValue, message]
  );
}

const FormMinMax = memo(function FormMinMax(props) {
  const { control } = useFormContext();

  return useMemo(
    () => (
      <FormInputContainer title={props.title}>
        <div className="flex gap-2 md:w-[200px] w-full">
          <Controller
            name={`${props.name}.min`}
            control={control}
            defaultValue={null}
            rules={{ required: "Must not be empty", ...props.rules }}
            render={({ field }) => (
              <InputNumberWithRange
                thisField={field}
                is="notMoreThan"
                selectedField={`${props.name}.max`}
                placeholder={props.minplaceholder}
                props={props}
              />
            )}
          />

          <Controller
            name={`${props.name}.max`}
            control={control}
            defaultValue={null}
            rules={{ required: "Must not be empty", ...props.rules }}
            render={({ field }) => (
              <InputNumberWithRange
                thisField={field}
                is="notLessThan"
                selectedField={`${props.name}.min`}
                placeholder={props.maxplaceholder}
                props={props}
              />
            )}
          />
        </div>
      </FormInputContainer>
    ),
    [props]
  );
});

export default FormMinMax;
