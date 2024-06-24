import isEmptyObject from "./isEmptyObject";

export default function processArray(array, { format, cleanup }) {
  return array.reduce((result, item) => {
    if (cleanup && isEmptyObject(item)) return result;

    format
      ? result.push({ ...item, field: item.field?.dataType })
      : result.push({ ...item });

    return result;
  }, []);
}
