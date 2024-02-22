let birthyear = [1989,1990,1991,1992]
let ages = []

// [2024-1989,2024-1990,2024-1991,2024-1992]
// [35,34,33,32]

for(let i = 0 ; i < birthyear.length; i++){
    //console.log(i)
    // console.log(birthyear[i])
    let x = 2024 - birthyear[i]
     ages.push(x)
}
console.log(ages)

// or
birthyear = [1989,1990,1991,1992]
let e2 = birthyear.map(function(el,index,arr){
    // console.log(el,index,arr)
    return 2024 - el

})
console.log(e2)

let numbers1 = [11,22,33,44,55,66,77,88,99]
//[12,23,34,45,56,67,78,89,100]
let e3 = numbers1.map(function(el,index,arr){
    return el + 1

})
console.log(e3)


// program 2

let marks = [11,44,66,88,33,44,55]
let above50 = []
//[66,88,55]

for(let i = 0 ; i < marks.length; i++)
{
    // console.log(i)
    // console.log(marks[i])
    if(marks[i] > 50){
        // console.log(marks[i])
        above50.push(marks[i])
    }

}
console.log(above50)

// or
// filter()

let e5 = marks.filter(function(el,index,arr){
    return el > 50
})
console.log(e5)


let transaction = [11,22,33,44,-77,88,99,67,-89]
let deposit = transaction.filter(function(el,index,arr){
    return el > 0

})
console.log(deposit)
let withdrawl = transaction.filter(function(el,index,arr){
    return el < 0
})
console.log(withdrawl)


// program 3
let numbersA = [11,22,33]//66
let total = 0
for(let i = 0 ; i < numbersA.length ; i++){
    //console.log(i)
    // console.log(numbers[i])
    total = total + numbersA[i]
    //      0     +  11      ----->11
    //       11   +  22  ------->33
    //       33   +  33 ------>66
      
}
console.log(total)

// or
//reduce()

let e7 = numbersA.reduce(function(acc,el,index,arr){
    return acc + el
},5)
console.log(e7)

// forEach()

let cities = ["pune","mumbai","banglore","kolkata","chennai"]
let q5 = cities.forEach(function(el,index,arr){
     console.log("welcome" + el)
})
console.log(q5)



