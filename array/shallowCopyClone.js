// shallow copy / clone an array
var fruits = ['apple', 'banana'];

var newFruits = fruits.slice(0);
newFruits.push('cherry');

var newFruits2 = [].concat(newFruits);
newFruits2.push('pineapple');

var newFruits3 = ['orange', ...newFruits2, 'strawberry'];

var newFruits4 = fruits.concat('watermelon')

console.log(fruits);
console.log(newFruits);
console.log(newFruits2);
console.log(newFruits3);
console.log(newFruits4);