//merging multiple obsjects into one

//objects
var defaultUser = {
  name: '',
  email: '',
  subscribed: true,
};

var actualUser = {
  name: 'Don',
  email: 'don@email.com',
};

var anotherUser = {
  name: 'Victor',
  address: {
    street: 'main',
    city: 'NY',
  }
};

//declarations
var userData = Object.assign(defaultUser, actualUser);
var userData2 = {...defaultUser, ...actualUser, ...anotherUser};

//logs
console.log(userData);
console.log(userData2);