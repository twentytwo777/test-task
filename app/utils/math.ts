export const clamp = (min: number, current: number, max: number): number => {
  return Math.min(Math.max(min, current), max);
};