export const _range = (end: any, start = 0) => {
  return new Array(end - start)
    .fill(end - start)
    .map((_, idx) => start + idx + 1);
};
