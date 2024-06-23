import FormMinMax from "../Input/FormMinMax";
import FormNumber from "../Input/FormNumber";

const getDataType = (value) => {
  switch (value) {
    case "Long":
      return 0;
    case "Double":
      return 1;
  }
};

export default function DynamicNumberField({ itemName, operator, dataType }) {
  switch (operator) {
    case "between":
      return (
        <FormMinMax
          title="Value"
          name={`${itemName}.value`}
          minplaceholder="Min"
          maxplaceholder="Max"
          minFractionDigits={getDataType(dataType)}
        />
      );
    default:
      return (
        <FormNumber
          title="Value"
          name={`${itemName}.value`}
          placeholder="Enter Number"
          minFractionDigits={getDataType(dataType)}
        />
      );
  }
}
