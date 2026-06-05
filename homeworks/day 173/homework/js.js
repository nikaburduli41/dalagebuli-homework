//1//
function accum(s) {
  let str = ''
  for(let i = 0; i < s.length; i++){
    str += s[i].toUpperCase() + s[i].repeat(i).toLowerCase() + '-' 
  }
  return str.slice(0,-1)
}
 