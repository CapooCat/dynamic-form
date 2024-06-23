import { Button } from "primereact/button";
import { IconPlus, IconRestore } from "@tabler/icons-react";
import { useFormArray } from "../context/FormArrayContext";

export default function FormHeader() {
  const { append, remove } = useFormArray();

  return (
    <section className="flex justify-between">
      <label className="font-bold text-lg">Dynamic Form</label>
      <div className="flex gap-2">
        <Button
          tooltip="Reset"
          tooltipOptions={{ position: "top" }}
          className="w-fit h-fit p-2"
          label={<IconRestore size={21} />}
          onClick={() => remove()}
        />
        <Button
          tooltip="Add a field"
          tooltipOptions={{ position: "top" }}
          className="w-fit h-fit p-2"
          label={<IconPlus size={21} />}
          onClick={() => append({ field: "", operator: "", value: "" })}
        />
      </div>
    </section>
  );
}
