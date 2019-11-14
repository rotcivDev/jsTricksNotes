// fill an array (with given value)
var phoneNumber = '02196952-9659';
function phoneNumberMask(num) {
  var securePhoneNumber = num.split('').filter(num => num !== '-')
                          .fill('*', 0, 4).fill('*', 11, num.length);
  return securePhoneNumber;
}
console.log(phoneNumberMask(phoneNumber));
