//1//
const numbers = [2, 7, 13, 18, 25, 30];
const result = numbers.filter(num => num % 2 === 0).map(num => num / 2);
console.log(result);
//3//
const temps = [22, 29, 15, 31, 27, 19, 33];
const hotDays = temps.map(temp => Math.round(temp * 1.8 + 32)).filter(fTemp => fTemp >= 85);
console.log(hotDays);