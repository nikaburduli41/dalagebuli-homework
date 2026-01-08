//3//
function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
  return this.value;
};

Counter.prototype.reset = function() {
  this.value = 0;
};
//4//
function _if(bool, func1, func2) {
  if(bool){
    return func1()
  }
  else{
    return func2()
  }
}