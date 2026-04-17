setInterval(() => {
   for(let i = 0;i < 5;i++){
     console.log(i)
   } 
}, 1000);
//2//
for(let i = 10;i <  0;i--){
  console.log(i)
  if(i === 0){
    console.log('done')
  }
  
  
}
//4//
setTimeout(() => {
    console.log(5)
}, 5000);