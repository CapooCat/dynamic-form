import { useFormArray } from "../context/FormArrayContext";
import FormItem from "./FormItem";

export default function FormBody() {
  const { name, fields } = useFormArray();

  return (
    <ul className="grid gap-4 md:h-[500px] h-[70svh] auto-rows-min overflow-auto no-scrollbar md:justify-center py-2">
      {fields.map((item, index) => (
        <FormItem key={item.id} name={name} index={index} />
      ))}
    </ul>
  );
}
