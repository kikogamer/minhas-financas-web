const setFormErrors = (errors, callback) => {
  for (let index = 0; index < errors.length; index += 1) {
    const element = errors[index];
    const fields = Object.keys(element);
    fields.map((field) => callback(field, { type: 'manual', message: `${field} ${element[field]}` }));
  }
};

export default setFormErrors;
