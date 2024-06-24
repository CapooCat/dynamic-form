import FormMinMax from "../Input/FormMinMax";
import FormNumber from "../Input/FormNumber";

function getDataType(value) {
  switch (value) {
    case "Long":
      return { minFractionDigits: 0, maxFractionDigits: 0 };
    case "Double":
      return { minFractionDigits: 1 };
  }
}

export default function DynamicNumberField({ itemName, operator, numberType }) {
  switch (operator) {
    case "between":
      return (
        <FormMinMax
          title="Value"
          name={`${itemName}.value`}
          minplaceholder="Min"
          maxplaceholder="Max"
          {...getDataType(numberType)}
        />
      );
    default:
      return (
        <FormNumber
          title="Value"
          name={`${itemName}.value`}
          placeholder="Enter Number"
          {...getDataType(numberType)}
        />
      );
  }
}
