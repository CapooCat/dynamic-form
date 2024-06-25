import { IconTrash } from "@tabler/icons-react";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { useMemo } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { useFormArray } from "../context/FormArrayContext";

import FormDynamicField from "./FormDynamicField";
import FormOperatorField from "./FormOperatorField";
import FormDropDown from "./Input/FormDropDown";
import fieldTypeJSON from "../mock/fieldType.json";
import isEmptyObject from "../utils/isEmptyObject";

function SelectFieldItemTemplate(option) {
  return (
    <div className="flex items-center gap-2">
      {option.name}
      <Badge
        value={option.dataType}
        severity="secondary"
        className="min-w-fit"
      />
    </div>
  );
}

function SelectFieldValueTemplate(option, e) {
  if (option)
    return (
      <div className="flex items-center gap-2 overflow-hidden">
        {option.name}
        <Badge
          value={option.dataType}
          severity="secondary"
          className="min-w-fit"
        />
      </div>
    );
  else return <span>{e.placeholder}</span>;
}

const FormItem = function FormItem({ name, index }) {
  const { control } = useFormContext();
  const { update } = useFormArray();
  const indexValue = useWatch({ control, name: `${name}.${index}` });

  return useMemo(() => {
    if (!isEmptyObject(indexValue))
      return (
        <li className="grid border-dashed border-black border-b-2 pb-6 last-of-type:border-0 md:border-0 md:p-0 md:grid-flow-col grid-cols-2 auto-cols-max gap-4">
          <FormDropDown
            title="Select Field Type"
            name={`${name}.${index}.field`}
            filterBy="dataType,name"
            itemTemplate={SelectFieldItemTemplate}
            valueTemplate={SelectFieldValueTemplate}
            options={fieldTypeJSON}
            optionLabel="name"
            placeholder="Select Field"
          />
          <FormOperatorField itemName={`${name}.${index}`} />
          <FormDynamicField itemName={`${name}.${index}`} />

          <Button
            className="p-2 mb-auto mt-[1.48em] ml-auto !w-full"
            pt={{ label: "flex justify-center" }}
            label={<IconTrash size={18} />}
            onClick={() => update(index, {})} //update value sang {} thay vì remove array gây re-render
          />
        </li>
      );
    else return <></>;
  }, [index, indexValue]);
};

export default FormItem;
