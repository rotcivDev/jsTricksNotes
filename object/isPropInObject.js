// check if a property  exists in object

var user = {
  name: 'John',
  address: {
    street: 'main',
    city: 'NY'
  }
};

var property = user.hasOwnProperty('name');
console.log(property)