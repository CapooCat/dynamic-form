import FormDate from "../Input/FormDate";

export default function DynamicTimeField({ itemName, operator }) {
  switch (operator) {
    case "between":
      return (
        <FormDate
          title="Value"
          name={`${itemName}.value`}
          placeholder="Select Range"
          selectionMode="range"
        />
      );
    default:
      return (
        <FormDate
          title="Value"
          name={`${itemName}.value`}
          placeholder="Select Date"
        />
      );
  }
}
