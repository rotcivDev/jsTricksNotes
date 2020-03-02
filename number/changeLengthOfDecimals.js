// Change length of decimals

let decimalFixer = (num, dec) => num.toFixed(dec);
// also have the .toPrecision() method;
console.log(decimalFixer(1.3245, 2));
