//find certain elements / index of array
var people = ['John', 'Mary', 'Joe', 'John', {name: 'Victor', age: 28}, {name: 'Paula', age: 29}];

const stringPicker = (arr, value) => {
  return arr.find(nm => nm === value);
} 

const stringIndexPicker = (arr, value) => {
  return arr.findIndex(nm => nm === value);
} 

const objectPicker = (arr, value, prop ) => {
  let objProp = prop;
  return arr.find(nm => nm[objProp] === value);
}

const objectIndexPicker = (arr, value, prop ) => {
  let objProp = prop;
  return arr.findIndex(nm => nm[objProp] === value);
} 

function findIndexAll(arr, value) {
  let indices = [];
  arr.forEach((el, i) => (el === value) && indices.push(i));
  return indices;
}

//logs
console.log(people);
console.log(stringPicker(people, 'Joe'));
console.log(stringIndexPicker(people, 'Joe'));
console.log(objectPicker(people, 'Paula', 'name'));
console.log(objectIndexPicker(people, 'Paula', 'name'));
console.log(findIndexAll(people, 'John'));