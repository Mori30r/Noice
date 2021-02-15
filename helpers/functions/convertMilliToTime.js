export const convertMilliSecondsToTime = (milliSeconds) => {
  const timeInSeconds = Math.floor(milliSeconds / 1000);
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  // 00:00
  return `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};
