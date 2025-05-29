export const getThisWeekRange = () => {
  const now = new Date();
  const start = new Date(now);
  const end = new Date(now);

  const day = now.getDay();
  const diffToMonday = (day === 0 ? -6 : 1) - day;

  start.setDate(now.getDate() + diffToMonday);
  start.setHours(0, 0, 0, 0);

  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return { start, end };
};

export const isToday = (dateString) => {
  const today = new Date();
  const date = new Date(dateString);
  return (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
};

export function isSameDate(dateStr, targetDateStr) {
  const date = new Date(dateStr);
  const target = new Date(targetDateStr);

  return (
    date.getDate() === target.getDate() &&
    date.getMonth() === target.getMonth() &&
    date.getFullYear() === target.getFullYear()
  );
}
