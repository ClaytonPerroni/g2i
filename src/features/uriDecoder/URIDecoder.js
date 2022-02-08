const recursiveDecode = object => {
  const returnObject = {};

  if (typeof object === 'string') {
    return decodeURIComponent(object);
  }
  if (typeof object !== 'object') {
    return object;
  }
  if (Array.isArray(object)) {
    return object.map(newObject => recursiveDecode(newObject));
  }
  Object.getOwnPropertyNames(object).forEach(key => {
    if (Array.isArray(object[key])) {
      returnObject[key] = object[key].map(subObject =>
        recursiveDecode(subObject)
      );
    } else {
      returnObject[key] = recursiveDecode(object[key]);
    }
  });

  return returnObject;
};

export default recursiveDecode;
