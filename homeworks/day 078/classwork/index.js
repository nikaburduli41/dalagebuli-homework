//1//
let age = prompt("enter your age")
if (age < 13) {
    console.log("you are kid")
} else if (age < 18 && age >= 13) {
    console.log("You are not adult yet")
} else if (age >= 18) {
    console.log("You are adult")
}
//2//
let variable = ""
variable = variable || "Guest"
console.log(variable)
//3//
let name = prompt("Enter your name")
let age1 = prompt("Enter your age")
if (age1 < 18) {
    console.log(`you are not an adult yet.${name}`)
}
else if (age > 18) {
    console.log(`hello ${name}`)
}