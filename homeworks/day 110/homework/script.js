//1//
let num = [1,2,3,4,5,6,7,8]
num.forEach(function(n){
    console.log(n);
});
//2//
let num2 = [1,2,3,4,5,6,7,8]
num2.forEach(function(n){
    console.log(n * n);
});
//3//
let user = ['nick']
user.forEach(function(name){
    console.log(`hello ${name}`);
});
//4//
num.forEach(function(num, index){
    console.log(index, num);
});
//5//
let anim = ['cat', 'dog', 'fish']
anim.forEach(function(animal, index){
    console.log(index, animal);
});