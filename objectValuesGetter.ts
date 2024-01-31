type MappedObj<T extends Record<string, any>> = {
  [key in keyof T as `get${Capitalize<string & key>}`]: () => T[key];
};
