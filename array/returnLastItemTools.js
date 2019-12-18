// Return last item of array

var arr1 = [5, 6,  7, 8];
console.log(`Variable arr1 = ${arr1}`);
arr1.pop();
console.log(`arr1 after .pop() method = ${arr1}`);

function findLastItem(arr, fn) {
  return arr.map((el, i) => [el, i]).filter(([el, i]) => fn(el, i)).pop();
}

function findLastIndex(arr, fn) {
  return arr.map((el, i) => [el, i]).filter(([el, i]) => fn(el, i)).pop()[1];
}

var names = ['jim', 'jeff', 'bob', 'judith'];
var containsJ = name => name.includes('j');

console.log(findLastItem(names, containsJ));
console.log(findLastIndex(names, containsJ));
