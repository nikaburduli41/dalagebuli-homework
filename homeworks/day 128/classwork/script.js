//1//
function cubeChecker(volume, side){
  if (volume <= 0 || side <= 0) {
    return false;
  }
  else{
    return Math.pow(side, 3) === volume;
  } 
};