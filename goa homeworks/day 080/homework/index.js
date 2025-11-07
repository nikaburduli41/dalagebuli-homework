let str = true
if (str === true) {
  console.log('This is true fact');
} else {
  console.log('This is false fact');
}

let num = false 
if (num === false && num !== true) {
  console.log('This is false fact');
}
else {
  console.log('This is true fact');
}

let num2 =prompt('true or false`');
if (num2 === 'true') {
  console.log('This is true game');
}
else if (num2 === 'false') {
  console.log('This is false game');
}

let num3 = false;
if (num3 === false) {
  console.log("this num is false");
}
else if (num3 === true) {
  console.log("this num is true");
}

let age = 20;
let canVote = (age >= 18) ? 'You can vote' : 'You cannot vote';
console.log(canVote);

let isMember = true;
let discount = isMember ? 'You get a discount' : 'No discount for you';
console.log(discount);

let score = 85;
let grade = (score >= 90) ? 'A' : (score >= 80) ? 'B' : (score >= 70) ? 'C' : (score >= 60) ? 'D' : 'F';
console.log(grade);

let isRaining = false;
let activity = isRaining ? 'Stay indoors' : 'Go for a walk';
console.log(activity);

let money = 100;
let canBuy = (money >= 50) ? 'You can buy the item' : 'You cannot afford the item';
console.log(canBuy);

let debt = 900;
let canPay = (debt <= 1000) ? 'You can pay your debt' : 'You cannot pay your debt';
console.log(canPay);