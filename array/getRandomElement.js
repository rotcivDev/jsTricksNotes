//get a random element from an array

var ages = [12,32,98,45,38,76];

function setRandomIndex(arr) {
  return Math.round(Math.random() * arr.length)
}

console.log(setRandomIndex(ages));
console.log(ages[setRandomIndex(ages)]);