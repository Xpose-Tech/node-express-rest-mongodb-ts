export const databaseValidate = (type: string, fieldName: string, model: string): string => {
  switch (type) {
    case 'missing':
      return `DB - Missing field: ${fieldName} on model ${model}`;
    case 'invalid':
      return `DB - Invalid field: ${fieldName} on model ${model}`;
    default:
      return `DB - Error field: ${fieldName} on model ${model}`;
  }
};
