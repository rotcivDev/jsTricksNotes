//delete items from array
var nums = [10, 20, 30];
function removeBySplice(arr,...add) {
  let removedNums = arr.splice(-1,1,add,'value');
  return removedNums;
}
function removeBySlice(arr) {
  let removednums = arr.slice(0,1);
  return removednums;
}
console.log(removeBySplice(nums, 10,20,30));
console.log(removeBySlice(nums));
console.log(nums);

var str = 'good luck'.split('');
str.splice(0,1);
str.splice( str.length - 1, 1);
const coolStr = () => {
  let cool = str.map((item, index) => {
    if ( index % 2 !== 1) return item.toUpperCase();
    return item;
  })
  return cool.join('');
}
console.log(coolStr());
console.log(str);

var ints = [43, 11, 13, 35, 27, 51];
var result = ints.filter(el => el <= 13);
var newResult = result.map(el => {
  ints.splice(ints.indexOf(el), 1);
  return el;
})
console.log(ints);
console.log(result);

var numbers = [];
for (let i = 0; i <= 10; i++) {
  numbers.push(i);
}
function removeItems(arr, fn) {
  return arr.filter(fn).map(el => {
    arr.splice(arr.indexOf(el), 1);
    return el;
  })
}
var removeItemsResult = removeItems(numbers, num => num > 4);
console.log(removeItemsResult);