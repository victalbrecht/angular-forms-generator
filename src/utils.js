export const typeScriptTypes = {
  'text': 'string',
  'email': 'string',
  'password': 'string',
  'number': 'number'
};

export const camelizeString = string => normalizeString(string.trim()).replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index == 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');

export const kebabizeString = string => normalizeString(string.trim()).replace(/\s+/g, '-').toLowerCase();

export const normalizeString = string => string.trim().normalize("NFD").replace(/[\u0300-\u036f]/g, '');

export const capitalizeFirstLetter = string => string.trim().replace(/^./, string[0].toUpperCase());

export const generateReactiveFormValidators = inputInfo => {
  if (inputInfo.type == 'Email' && inputInfo.required)
    return `['',  [Validators.required, Validators.email]]`;
  else if (inputInfo.type == 'Email')
    return `['',  [Validators.email]]`;
  else if (inputInfo.required)
    return `['',  [Validators.required]]`;
  else
    return `''`;
};

export const hasReactiveFormValidators = inputList => inputList.some(input => input.type == 'Email' || input.required) ? ', Validators' : null;