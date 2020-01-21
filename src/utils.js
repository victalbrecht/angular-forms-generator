export const camelizeString = string => normalizeString(string.trim()).replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index == 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');

export const kebabizeString = string => normalizeString(string.trim()).replace(/\s+/g, '-').toLowerCase();

export const normalizeString = string => string.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '');

export const capitalizeFirstLetter = string => string.trim().replace(/^./, string[0].toUpperCase());
