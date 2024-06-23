//convert kiểu dữ liệu sang input
export default function dataTypeToInputType(fieldType) {
  switch (fieldType) {
    case "String":
      return "text";
    case "Timestamp":
      return "time";
    case "Double":
      return "number";
    case "Long":
      return "number";
    case "Bool":
      return "bool";
    default:
      return "none";
  }
}
