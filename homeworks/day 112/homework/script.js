//1//
let num1 = [1,2,3,4,5,6,7]
for(let i = 0;i < num1.length;i++){
    console.log(i)
}


//2//
let names = ['gela','barkalaia','gio','nika']

for(let i = 0;i < names.length;i++){
    console.log(`${names[i]}` + ' ' + names.indexOf(names[i]))
}

//3//
let num = [1,2,3,4,5,6,7,64,45,243]

for(let i = 0;i < num.length;i++){
    console.log(i * 2)
}

//4//
let numms = [1,2,3,4,5,6,7,8,9,0,10,11,22,33,44,55,66,77,88,99,100,111,122,133,432,456,35,43]
for(let i = 0;i < numms.length ;i++){
    console.log(i)
}
 
//5//
for(let i = 0;i < num1.length + names.length + num.length + numms.length;i++){
    console.log(i)
}
