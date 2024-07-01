function updateObject(object, id, prop, propValue,value) {
  if (value === "") {
    delete object[id][prop];
  } else if (prop === propValue) {
    object[id][prop] = object[id][prop] || []; // shortcircuit evaluation
    object[id][prop].push(value);
  } else {
    object[id][prop] = value;
  }
  return object;
}

