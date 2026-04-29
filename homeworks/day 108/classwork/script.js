//1//
function boolToWord( bool ){
    if(bool === true){
      return "Yes"
    }else{
      return "No"
    }
}
//3//
function greet() {
    return "hello world!";
}
//5//
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
//6//
function sum (numbers) {
  let res = 0
  for(let i = 0; i < numbers.length;i++){
    res+=numbers[i]
  }
  return res
}
