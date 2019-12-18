// Remove items from left / right side of array

var nums = [23, 987, 45, 50, 89];
console.log(`variable nums = ${nums}`);

var removeFromLeft = nums.slice(0, -1);
console.log(`values removed from left => ${removeFromLeft}`);

var removeFromRight = nums.slice(1);
console.log(`values removed from right => ${removeFromRight}`);

console.log(`the original variable stays immutable: nums = ${nums}`);

var getNthItem = (arr, num) => arr.slice(num -1, num)[0];
var getItemResult = getNthItem(nums, 1);
console.log(`first item of array nums = ${getItemResult}`);

function offsetArray(arr, offset) {
  return [...arr.slice(offset), ...arr.slice(0, offset)];
}
var offsetResult = offsetArray(nums, 0);
console.log(offsetResult);
