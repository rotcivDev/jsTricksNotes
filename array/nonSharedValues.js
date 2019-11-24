const arr1 = ['fred', 'doug', 'amy', 30, true, NaN, undefined, 'amy', 30];
const arr2 = ['fred', 'doug', 'joe', 40, true];

const nonSharedFilter = (first, second) => {
  let result = first.filter( el => !second.includes(el));
  return result;
}
console.log(nonSharedFilter(arr1, arr2));

const nonSharedFilterWithoutDuplication = (first, second) => {
  let result = [...new Set(first)].filter( el => !second.includes(el));
  return result;
}
console.log(nonSharedFilterWithoutDuplication(arr1, arr2));
