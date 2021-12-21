export const requestBlockDuration = (retryAfterHeader: string) => {
  const unixTimeStampBlockDuration = parseInt(retryAfterHeader, 10);
  const d = new Date(unixTimeStampBlockDuration);

  // for example when calling the function, use .getMinutes() to show minutes
  return d;
};
