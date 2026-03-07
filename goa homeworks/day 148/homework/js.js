//2//
function highAndLow(numbers){
  let list = numbers.split(' ')
  let max = Number(list[0])
  let min = Number(list[0])
  for(let i = 0;i < list.length;i++){
    let num = Number(list[i])
    if(num > max){
      max = num
    }
    if(num < min){
      min = num
    }
  }
  return `${max} ${min}`      

}
//3//
function getCount(str) {
  let count = 0;
  for (let i in str) {
    if ('aeiou'.includes(str[i])) {
      count++;
    }
  }
  return count;
}