// string
let first_name = "rupa"
let last_name = 'kotkar'
let middle_name = "raybhan"

console.log(first_name)
console.log(last_name)
console.log(middle_name)


console.log(typeof first_name)
console.log(typeof last_name)
console.log(typeof middle_name)

// string------>object------->properties and methods
first_name = "rupa"
last_name = "kotkar"
// my first_name is rupa and my last_name is kotkar
console.log("my firstname is "+first_name+" my lastname is "+ last_name)
// string interpolation
console.log('my firstname is ${first_name} and my lastname is ${last_name}')

// program 2
// string + string -----> string
// number + string ------>string
// string + number ------> string
// number + number -------> number

let a = 10
let b = 15
let c = "hello"
console.log(a+b+c)
// number + number + string
// 10 + 15
    // 25 + "hello"
        // '25hello'

console.log(c+a+b)
// string + number + number
//"hello" + 10
// hello10 + 15
    // hello1015

// program 3
let city = "pune"
// 0  1  2  3
// p  u  n  e
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])


// program 4
let city2 = "chandrapur"
// 0  1  2  3   4  5  6  7  8  9
// c  h  a  n  d  r  a  p  u  r
// loop
 // object --- properties

 console.log(city2.length)//10
 for(let i = 0 ; i < city2.length ; i++){
    //console.log(i)
    console.log(city2[i])
 }
 for(let i = city2.length - 1 ; i >= 0 ; i--){
    // console.log(i)
    console.log(city2[i])
 }


// program 5
let city3 = "nagpur"
// n  a  g  p  u  r
// 0  1  2  3  4  5

let i1 = 0
while(i1 < city3.length){
    console.log(city3[i1])
    i1 = i1 + 1
}

let i2 = city3.length -1
while(i2 >= 0){
    // console.log(i2)
    console.log(city3[i2])
    i2 = i2 - 1
}

// program 6

let city5 = "pune"
//enup
let revst = ""

for(let i = 0 ; i < city5.length ; i++){
    //console.log(city5[i])
    revst = city5[i] + revst
    // p  + " " ======>p
    // u  = p ======>up
    // n  + up ====>nup
    // e  +  nup=====>enup
}
console.log(revst)

