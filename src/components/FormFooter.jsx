import { Button } from "primereact/button";
import { useFormContext } from "react-hook-form";
import { useToast } from "../context/ToastContext";
import processArray from "../utils/processArray";

export default function FormSubmitButton() {
  const { handleSubmit } = useFormContext();
  const { showToast } = useToast();

  const onSubmit = (data) => {
    const reformatedData = processArray(data.fieldArray, {
      format: true,
      cleanup: true,
    });

    showToast({
      severity: "success",
      summary: "Success",
      detail: "Submit successful, check the console to see the result",
      life: 5000,
    });

    console.log(reformatedData);
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
