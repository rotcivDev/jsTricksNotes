// converting objects to array

var person = { name: 'Amy', age: 40 };

var result = Object.keys(person)
console.log(result);


var arr = [];
Object.keys(person).forEach(key => arr.push([key, person[key]]));
console.log(arr);

var result2 = Object.keys(person).map(key => [key, person[key]]);
console.log(result2);

var result3 = Object.entries(person);
console.log(result3);