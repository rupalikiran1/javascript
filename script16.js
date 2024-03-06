let first_name = "chandrapur"
console.log(first_name)
// 0  1  2  3  4  5  6  7  8  9
// c  h  a  n  d  r  a  p  u  r
//-10 -9 -8 -7 -6 -5 -4 -3 -2 -1
let q1 = first_name.slice(2)
let q2 = first_name.slice(2,8)
console.log(q1)
console.log(first_name.slice(2,8))
console.log(first_name.slice(-8))
console.log(first_name.slice(1,-1))
console.log(first_name.slice(-7,8))
console.log(first_name.slice(-1,-3))

// program 2
let last_name = "kotkar"
let fullname = last_name.concat(" ").concat("rupali")
console.log(fullname)

// program 3
let full_name = "krupa kotkar 7744087820"
let info = full_name.split(" ")
console.log(info)
console.log(full_name.split("a"))

// program 4
let city2 = "nagpur"
let e2 = city2.indexOf('n')
console.log(e2)

let city3 = "chandrapur"
let e3 = city3.lastIndexOf('a')
console.log(e3)

let info3 = "I am learning javascript"
let e4 = info3.replace("javascript","python")
console.log(e4)

let e5 = info3.repeat(3)
console.log(e5)

// program 5
let city10 = "warDha"
//0  1  2  3  4  5
//w  a  e  D  h  a

console.log(city10.charAt(1))
console.log(city10.charCodeAt(3))

let info2 = "i am learning javascript"
console.log(info2.substring(2,88))
