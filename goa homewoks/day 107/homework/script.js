//1//
for(let i = 1;i < 75;i++,i++){
    console.log(i)
}
//2//
let user = {
    name:"gio",
    age:"67"
}
for(let key in user){
    console.log(key,user[key])
}
//3//
let arr = [1,2,3,4,5,6]
for(let value of arr){
    console.log(value)
}
//5//
localStorage.setItem("name1","gio")
localStorage.setItem("age1", 67)
localStorage.setItem("name2","achi")
localStorage.setItem("age2", 45)
localStorage.setItem("name3","bombo")
localStorage.setItem("name4","ghd")
localStorage.setItem("name5","gfrs")
//6//
localStorage.removeItem(name1)
localStorage.removeItem(age1)
//7//
console.log(localStorage.length)
//9//
localStorage.clear()
