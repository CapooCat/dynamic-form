import FormChips from "../Input/FormChips";

export default function DynamicTextField({ itemName, operator }) {
  switch (operator) {
    default:
      return (
        <FormChips
          title="Value"
          name={`${itemName}.value`}
          placeholder="Type then press Enter"
        />
      );
  }
}
