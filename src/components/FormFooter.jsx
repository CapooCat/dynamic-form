import { Button } from "primereact/button";
import { useFormContext } from "react-hook-form";
import { useToast } from "../context/ToastContext";

export default function FormSubmitButton() {
  const { handleSubmit } = useFormContext();
  const { showToast } = useToast();

  const onSubmit = (data) => {
    const reformatedData = data.fieldArray.map((item) => ({
      ...item,
      field: item.field?.dataType,
    }));

    showToast({
      severity: "success",
      summary: "Success",
      detail: "Submit successful, check the console to see the result",
      life: 5000,
    });

    data.fieldArray = reformatedData;
    console.log(data);
  };

  const onError = () => {
    showToast({
      severity: "error",
      summary: "Invalid submission",
      detail: "Hover invalid input to see the Error",
      life: 5000,
    });
  };

  return (
    <form
      className="pt-4 flex justify-center"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <Button label="Submit" className="sm:min-w-[200px] min-w-full py-2" />
    </form>
  );
}
