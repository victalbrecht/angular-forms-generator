export const camelizeString = string =>
  string.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '').replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
    return index == 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');