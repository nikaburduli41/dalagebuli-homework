//3//
let nums = [1,2,3,4,5,6,7,8,9,10]
let count =  0
nums.map((curval, index) => {
    if (index % 2 == 1){
        count += curval
    }
})
console.log(count)
//4//
const names = ["luka", "nika", "giorgi", "vano", "daviti", "gio"]

const result = names.filter((curVal) => curVal.length > 4)
console.log(result)
//5//
const numbers = [100,234,123,345,34]
const result3 = numbers.filter((curVal) => curVal / 2 > 20)

console.log(result3)
