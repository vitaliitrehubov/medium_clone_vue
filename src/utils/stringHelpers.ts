export const camelCase = (str: string): string => {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

export const upperFirst = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}