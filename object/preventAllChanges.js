//prevent object properties from being added, deleted or modified
var user = {
  name: 'Victor',
  email: 'rommel@gmail.com'
}

//comment the method bellow to modify the user output logs
Object.freeze(user);

//modifications
user.name = 'frictor';
user.lastName = 'firekush';
user.email = 'oh no! bad new...';

//logs
console.log(user);
console.log(Object.getOwnPropertyDescriptors(user));
console.log(Object.isFrozen(user));