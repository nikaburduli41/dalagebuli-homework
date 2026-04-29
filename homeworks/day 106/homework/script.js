//1//
function greet(){
  return "hello world!"
}
//3//
function basicOp(operation, value1, value2){
  if (operation === "+"){
    return value1 + value2
  }
  else if (operation === "-"){
    return value1 - value2
  }
  else if (operation === "*"){
    return value1 * value2
  }
  else if (operation === "/"){
    return value1 / value2
  }
}
//4//
function century(year) {
  if (year % 100 === 0){
    return year / 100
  }
  else{
    return Math.floor(year / 100) + 1
  }
}
//5//
function sum (numbers) {
  let res = 0
  for(let i = 0; i < numbers.length;i++){
    res+=numbers[i]
    
  }
  return res
  
}
