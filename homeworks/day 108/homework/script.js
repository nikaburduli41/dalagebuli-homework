//2//
var summation = function (num) {
    let res = 0 
    for(let i = 0; i <= num;i++){
      res+=i
    }
    return res
}
//3//
function countSheeps(Sheep) {
  let res = 0
  for(let i = 0; i < Sheep.length;i++){
    if(Sheep[i] === true){
      res++
    }
  }
  return res
}
//4//
function doubleInteger(i) {
  return i * 2
}
//5//
function greet(name){
  return `Hello, ${name} how are you doing today?`
}
//6//
function litres(time) {
  return Math.floor(time * 0.5)
}
