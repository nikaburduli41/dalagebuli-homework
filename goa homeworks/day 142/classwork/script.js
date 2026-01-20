//2//
function accum(s) {
  let str = ''
  for(let i = 0; i < s.length; i++){
    str += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-' 
  }
  return str.slice(0,-1)
}
//4//
function countSheeps(Sheep) {
  let res = 0
  for(let i = 0; i < Sheep.length;i++){
    if(Sheep[i] === true){
      res++
    }
  }
  return res
}