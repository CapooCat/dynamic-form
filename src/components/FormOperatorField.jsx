import { useEffect, useMemo, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";

import FormDropDown from "./Input/FormDropDown";
import operatorJSON from "../mock/operator.json";
import dataTypeToInputType from "../utils/dataTypeToInputType";

function reformatOperatorJSON(json) {
  const result = [];
  for (const [key, value] of Object.entries(json)) {
    result.push({ value: key, name: value });
  }
  return result;
}

function getInputOperatorData(field, operatorJSON) {
  const inputType = dataTypeToInputType(field?.dataType);
  if (inputType !== "none")
    return reformatOperatorJSON(operatorJSON[inputType]);
  else return [];
}

export default function FormOperatorField({ itemName }) {
  const [operator, setOperator] = useState([]);
  const { control } = useFormContext();
  const field = useWatch({
    control,
    name: `${itemName}.field`,
  });

  useEffect(() => {
    setOperator(getInputOperatorData(field, operatorJSON));
  }, [field]);

  return useMemo(
    () => (
      <FormDropDown
        title="Operator"
        name={`${itemName}.operator`}
        options={operator}
        optionLabel="name"
        optionValue="value"
        placeholder="Select Operator"
      />
    ),
    [itemName, operator]
  );
}
