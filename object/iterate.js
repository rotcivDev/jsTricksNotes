//iterating over an object
var username = {
  first: 'John',
  last: 'Doe',
  age: 80,
  adress: {
    street: 'Deathroad Street',
    city: 'Doomsday'
  }
};

for (let u in username) {
  if (username.hasOwnProperty(u)) {
    console.log(u, username[u])
  }
}

for (let u of Object.keys(username)) {
  console.log(u, username[u])
}

const entriesIterate = Object.entries(username);
console.log(entriesIterate);

const obj = {};
Object.assign(obj, entriesIterate);
console.log(obj);

entriesIterate.forEach(arr => {
console.log(arr.toString().split(',').join(' '));
});

function arrayIndexCounter(arr) {
  return arr.length;
}
console.log(arrayIndexCounter(entriesIterate));

function indexFilter(icounter) {
  return icounter % 2 === 0 ? 'par' : 'impar'; 
}
console.log(indexFilter(arrayIndexCounter(entriesIterate)))

const indexRemover = arr => {
  let lastIndex = arr.length -= 1;
  arr.splice(lastIndex, 1, 'oops');
  return arr
};
console.log(indexRemover(entriesIterate))
console.log(entriesIterate)
