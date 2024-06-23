const isStringArray = (value) => {
  const isArray = Array.isArray(value);
  if (isArray) return value.some((item) => typeof item === "string");
  else return false;
};

export default isStringArray;
