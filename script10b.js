// find()
//             0   1  2  3  4  5
let numberB = [22,33,44,55,40,33]
let q6 = numberB.filter(function(el,index,arr){
    return el > 40
})
console.log(q6)

let q7 = numberB.find(function(el,index,arr){
    return el > 40
})
console.log(q7)

// findIndex()
let q8 = numberB.findIndex(function(el,index,arr){
    return el > 40

})
console.log(q8)

// every()

let numbersV = [11,2,33,11,22,33,44,55,66]
let q9 = numbersV.every(function(el,index,arr){
    return el > 10

})
console.log(q9)

// some()

numbersV = [11,2,33,11,22,33,44,55,66]
let q10 = numbersV.some(function(el,index,arr){
    return el > 500

})
console.log(q10)

// slice()
//          0    1   2    3  4    5  6  7   8    9
let nums = [111,222,333,444,555,666,777,888,999,1000]
//            -10  -9   -8  -7   -6 -5  -4  -3  -2   -1
// nums.slice(startIndex,endIndex(not included))
console.log(nums.slice(3))
console.log(nums.slice(3,6))
console.log(nums.slice(-10,6))
console.log(nums.slice(1,-3))
console.log(nums.slice(-3))
console.log(nums.slice(-1,-3))

