//get all values in object

var name = {
  first: 'John',
  last: 'Doe',
  age: 100,
};

var values = Object.keys(name).map(key => name[key]);
var values2 = Object.values(name);

console.log(values);
console.log(values2);