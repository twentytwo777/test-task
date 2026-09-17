export const stringToSet = (string: string, separator: string = ','): Set<string> => {
  return new Set(string.split(separator));
};

export const setToString = (set: Set<string>, separator: string = ','): string => {
  return [...set].join(separator);
};