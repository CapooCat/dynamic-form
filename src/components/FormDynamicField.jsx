import { useFormContext, useWatch } from "react-hook-form";
import { useUpdateEffect } from "primereact/hooks";
import { useMemo } from "react";

import DynamicTextField from "./Dynamic/DynamicTextField";
import DynamicTimeField from "./Dynamic/DynamicTimeField";
import DynamicNumberField from "./Dynamic/DynamicNumberField";
import FormText from "./Input/FormText";
import dataTypeToInputType from "../utils/dataTypeToInputType";

function DynamicField({ dataType, operator, name }) {
  const { setValue } = useFormContext();
  let inputType = dataTypeToInputType(dataType);
  if (inputType !== "none" && !operator) inputType = "missing-operator";

  useUpdateEffect(() => {
    setValue(`${name}.value`, null);
  }, [dataType, operator]);

  useUpdateEffect(() => {
    setValue(`${name}.operator`, null);
  }, [dataType]);

  switch (inputType) {
    case "none":
      return (
        <FormText
          title="Value"
          name={`${name}.value`}
          placeholder="Please Select a Field Type"
          disabled
        />
      );
    case "missing-operator":
      return (
        <FormText
          title="Value"
          name={`${name}.value`}
          placeholder="Please Select an Operator"
          disabled
        />
      );
    case "text":
      return <DynamicTextField itemName={name} operator={operator} />;
    case "time":
      return <DynamicTimeField itemName={name} operator={operator} />;
    case "number":
      return (
        <DynamicNumberField
          itemName={name}
          operator={operator}
          numberType={dataType}
        />
      );
  }
}

export default function FormDynamicField({ itemName }) {
  const { control } = useFormContext();
  const [field, operator] = useWatch({
    control,
    name: [`${itemName}.field`, `${itemName}.operator`],
  });

  return useMemo(
    () => (
      <DynamicField
        dataType={field?.dataType}
        operator={operator}
        name={itemName}
      />
    ),
    [field, operator, itemName]
  );
}
