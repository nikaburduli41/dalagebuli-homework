//1//
let res = 1
if (res == 1 || res == 2) {
    console.log("True");
}
else {
    console.log("False");
}

let res2 = 2
if (res2 == 1 || res2 == 3) {
    console.log("True");
}
else {
    console.log("False");
}

if (10 > 3 || 0 < 1) {
    console.log("True");
}
else {
    console.log("False");
}
if (11 > 3 || 0 > 900) {
    console.log("True");
}
else {
    console.log("False");
}
if (700 > 3 || 0 < 900) {
    console.log("True");
}
else {
    console.log("False");
}
if (70089 > 29723 || 29488 > 900) {
    console.log("True");
}
else {
    console.log("False");
}


let res3 = 5
if (res3 == 1 || res3 == 3) {
    console.log("True");
}
else {
    console.log("False");
}


let res900 = 2
if (res900 == 8291 || res900 == 383) {
    console.log("True");
}
else {
    console.log("False");
}


let res33 = 20000
if (res33 == 1 || res33 == 3) {
    console.log("True");
}
else {
    console.log("False");
}

let res90 = 50
if (res90 == 1 || res90 == 3) {
    console.log("True");
}
else {
    console.log("False");
}
//2//
let exam_score = Math.floor(Math.random() * 100);
if (exam_score > 90 && exam_score === 100) {
    console.log("A");
}
else if (exam_score > 80 && exam_score < 90) {
    console.log("B");
}
else if (exam_score > 70 && exam_score < 80) {
    console.log("C");
}
else if (exam_score > 60 && exam_score < 70) {
    console.log("D");
}
else if(exam_score > 0 && exam_score < 60) {
    console.log("F");
}
//3//
let name  = "John"
if (name.length < 5) {
    console.log("this is my friend")
}  
else if (name.length > 5) {
    console.log(name)
}