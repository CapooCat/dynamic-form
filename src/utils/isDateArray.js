const isDateArray = (value) => {
  const isArray = Array.isArray(value);
  if (isArray) return value.some((item) => item instanceof Date);
  else return false;
};

export default isDateArray;
