function myEach(collection, callback) {
  let iter;
  if (typeof collection === "object") {
    iter = Object.values(collection);
  } else {
    iter = collection;
  }
  for (let i = 0; i < iter.length; i++) {
    callback(iter[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  let iter;
  const newArray = [];
  if (typeof collection === "object") {
    iter = Object.values(collection);
  } else {
    iter = collection;
  }
  for (let i = 0; i < iter.length; i++) {
    newArray.push(callback(iter[i]));
  }
  return newArray;
}

function myReduce(collection, callback, acc) {
  let iter;
  if (typeof collection === "object") {
    iter = Object.values(collection);
  } else {
    iter = collection;
  }

  for (let i = 0; i < iter.length; i++) {
    if (acc === undefined) {
      acc = iter[0];
    } else {
      acc = callback(acc, iter[i], iter);
    }
  }
  return acc;
}

function myFind(collection, predicate) {
  let iter;
  if (typeof collection === "object") {
    iter = Object.values(collection);
  } else {
    iter = collection;
  }
  for (let i = 0; i < iter.length; i++) {
    if (predicate(iter[i]) === true) {
      return iter[i];
    }
  }
  return undefined;
}

function myFilter(collection, predicate) {
  let iter;
  const newArray = [];
  if (typeof collection === "object") {
    iter = Object.values(collection);
  } else {
    iter = collection;
  }
  for (let i = 0; i < iter.length; i++) {
    if (predicate(iter[i]) === true) {
      newArray.push(iter[i]);
    }
  }
  return newArray;
}

function mySize(collection) {
  let iter;
  if (typeof collection === "object") {
    iter = Object.values(collection);
  } else {
    iter = collection;
  }
  return iter.length;
}

function myFirst(array, n) {
  const newArray = [];
  if (n === undefined) {
    return array[0];
  } else {
    for (let i = 0; i < n; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}

function myLast(array, n) {
  const newArray = [];
  if (n === undefined) {
    return array[array.length - 1];
  } else {
    for (let i = array.length - n; i < array.length; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  }
}

function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
