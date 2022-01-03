export const numbersAndDashZip = (zip: string) => {
  const regex = /^[0-9.-]*$/g;
  return regex.test(zip);
};
