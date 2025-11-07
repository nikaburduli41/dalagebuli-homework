//1//
let number = prompt("Enter a number");
if (number % 2 === 0) {
    console.log("ლუწი");
}
else {
    console.log("კენტი");
}
//2//
let age = prompt("Enter your age");
if (age < 18) {
    console.log("50% off");
}
else if (age > 18) {
    console.log("No discount");
}
//3//
let age2 = prompt("Enter a number");
if (age2 < 17){
    console.log("50% off");
}
else if (age2 === 18) {
    console.log("25% off");
}
else {
    console.log("No discount");
}
//5//
let name = prompt("Enter your name");
if (name.length <= 6) {
    console.log(`hello my friend ${name}!`);
}
else {
    console.log(`hello ${name}!`);
}
