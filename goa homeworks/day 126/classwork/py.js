//2//
function peopleWithAgeDrink(old) {
  if(old <= 14){
    return 'drink toddy'
  }
  else if(old > 14 && old >= 18){
    return 'drink coke'
  }
  else if(old > 18 && old >= 21){
    return 'drink beer'
  }
  else if(old >= 21){
    return 'drink whisky'

  }
};
//3//
class Kata {
  static getVolumeOfCuboid(length, width, height) {
    return length * width * height
  }
}