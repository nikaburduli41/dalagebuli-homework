//2//
function stringToArray(string){
  return string.split(" ")
}
//7//
function positiveSum(arr) {
  let res = 0;
  for (let num of arr) {
    if (num > 0) {
      res += num;
    }
  }
  return res;
}
//8//
function numberToString(num) {
  return num + ''
}