//lấy error từ useFormState của React Hook Form
export default function getError(field, errors) {
  try {
    const keys = field.split(".");
    let pointer = errors;

    keys.forEach((key) => {
      pointer = pointer[key];
    });

    return pointer;
  } catch {
    return null;
  }
}
