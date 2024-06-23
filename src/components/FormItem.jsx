import { IconTrash } from "@tabler/icons-react";
import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { useMemo } from "react";
import { useFormArray } from "../context/FormArrayContext";

import FormDynamicField from "./FormDynamicField";
import FormOperatorField from "./FormOperatorField";
import FormDropDown from "./Input/FormDropDown";
import fieldTypeJSON from "../mock/fieldType.json";

export default function FormItem({ index }) {
  const { name, remove } = useFormArray();

  const SelectFieldItemTemplate = (option) => {
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
  };

  const SelectFieldValueTemplate = (option, e) => {
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
  };

  return useMemo(
    () => (
      <li className="grid border-dashed border-b-2 pb-6 last-of-type:border-0 md:border-0 md:p-0 md:grid-flow-col grid-cols-2 auto-cols-max gap-4">
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
          className="p-2 mb-auto mt-8 ml-auto !w-full"
          pt={{ label: "flex justify-center" }}
          label={<IconTrash stroke={1.5} size={21} />}
          onClick={() => remove(index)}
        />
      </li>
    ),
    [name, index]
  );
}
