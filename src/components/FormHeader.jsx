import { Button } from "primereact/button";
import { IconPlus, IconRestore } from "@tabler/icons-react";
import { useFormArray } from "../context/FormArrayContext";

export default function FormHeader({ arrayMethods }) {
  const { append, remove } = useFormArray();

  return (
    <section className="flex justify-between">
      <label className="font-bold text-lg">Dynamic Form</label>
      <div className="flex gap-2">
        <Button
          className="w-fit h-fit p-2"
          label={<IconRestore stroke={1.5} />}
          onClick={() => remove()}
        />
        <Button
          className="w-fit h-fit p-2"
          label={<IconPlus stroke={1.5} />}
          onClick={() => append({ field: "", operator: "", value: "" })}
        />
      </div>
    </section>
  );
}
