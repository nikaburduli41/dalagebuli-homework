//2//
function recycleMe(recycle){ 
  let plastic = 0
  let glass = 0
  let card = 0
  for(let i = 0;i < recycle.length;i++){
    if(recycle[i] > 0){
      plastic++
    }else if(recycle[i]<0){
      glass++
    }else if(recycle[i]=== 0){
      card++
    }
  }
  return [plastic,glass,card]
}