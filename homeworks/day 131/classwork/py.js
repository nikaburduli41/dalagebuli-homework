//1//
function validateHello(greetings) {
  const name = greetings.toLowerCase();
  
  if (name.includes('hello')) {
    return true;
  } else if (name.includes('ciao')) {
    return true;
  } else if (name.includes('salut')) {
    return true;
  } else if (name.includes('hallo')) {
    return true;
  } else if (name.includes('hola')) {
    return true;
  } else if (name.includes('ahoj')) {
    return true;
  } else if (name.includes('czesc')) {
    return true;
  } else {
    return false;
  }
}
//4//
function repeatStr (n, s) {
  return s.repeat(n)
}