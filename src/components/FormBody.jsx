import { useFormArray } from "../context/FormArrayContext";
import FormItem from "./FormItem";

export default function FormBody() {
  const { fields } = useFormArray();

  if (fields.length)
    return (
      <ul className="grid gap-4 md:max-h-[500px] max-h-[70svh] overflow-auto md:justify-center py-2">
        {fields.map((item, index) => (
          <FormItem key={item.id} index={index} />
        ))}
      </ul>
    );
  else
    return (
      <section className="w-full flex justify-center py-8">
        <h1>Please add a field</h1>
      </section>
    );
}
