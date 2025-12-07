//1//
function oddCount(n){
  return Math.floor(n / 2)
}
//2//
function howMuchILoveYou(nbPetals) {
  const phrases = [
    "I love you",
    "a little",
    "a lot",
    "passionately",
    "madly",
    "not at all"
  ];
  
  return phrases[(nbPetals - 1) % phrases.length];
}