export default function isEmptyObject(objectName) {
  return (
    Object.keys(objectName).length === 0 && objectName.constructor === Object
  );
}
