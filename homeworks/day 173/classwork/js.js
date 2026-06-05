//1//
function cogRpm(cogs) {
  if(cogs.length === 0){
    return 0
  }
  else if(cogs.length === 1){
    return 1
  }
  
  let first = cogs[0]
  let last = cogs[cogs.length - 1]
  let result = first / last
  if(cogs.length %2 === 0){
    return -result
    
  }else{
    return result
  }
  
  
  
}
//2//
function sumLength(array) {
  let positivesum = 0
  let negativeamount = 0
  let zeros = 0

  for(let i = 0;i < array.length;i++){
    if(array[i] > 0){
      positivesum += array[i]
    }
    if(array[i] < 0){
      negativeamount += 1
    }
    if(array[i] === 0){
      zeros += 1
    }
  }
  let zero2 = Math.ceil(zeros / 2)
  return `${positivesum} ${negativeamount + zero2}`
}
//3//
function mean(lst){
  let numbers = 0
  let strings = ''
  for(let i = 0;i < lst.length;i++){
    if(!isNaN(lst[i])){
      numbers += Number(lst[i])
    }else{
      strings += lst[i]
    }
    
  }
  return [numbers / 10,strings]
}
