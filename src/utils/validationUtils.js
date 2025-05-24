export const isTimeOverlap = (start1, end1, start2, end2) => {
  return start1 < end2 && end1 > start2;
};
