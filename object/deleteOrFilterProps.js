//delete of filter a property from an object

var name = { first: 'John', last: 'Doe' };

//delete name.last;

function filterObject(obj, prop) {
  var filteredObject = {};
  Object.keys(obj)
        .filter(k => k !== prop)
        .map(key => filteredObject[key] = obj[key] );
  return filteredObject
}

console.log(filterObject(name, 'first'));