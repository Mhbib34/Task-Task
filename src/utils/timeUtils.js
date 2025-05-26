export const pad = (num) => String(num).padStart(2, "0");

export const formatTime = (date) =>
  `${pad(date.getHours())}:${pad(date.getMinutes())}`;

export const getNowTime = () => {
  const now = new Date();
  const defaultTime = formatTime(now);
  return {
    start: defaultTime,
    end: defaultTime,
    date: now.toISOString().split("T")[0],
  };
};
