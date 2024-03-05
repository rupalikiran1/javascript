// string---object

let first_name = "krupa"
console.log(first_name)
console.log(typeof first_name)

let q1 = first_name.length
console.log(q1)

// Method
// Action
// Return type

let last_name = "kotkar"

// program 1
let s1 = last_name.toUpperCase()
console.log(s1)

let middle_name = 'Raybhan'
let s2 = middle_name.toLowerCase()
console.log(s2)

// program 2
let s3 = "hello".toUpperCase().toLowerCase().length
// let s3 = "hello".toUpperCase().toLowerCase().length.toUpperCase()
console.log(s3)

// program 3
let fruit = "apple"
let s4 = fruit.startsWith("app")
let s5 = fruit.startsWith("a")
let s6 = fruit.startsWith("A")
let s7 = fruit.startsWith("e")
let s8 = fruit.startsWith("le")
let s9 = fruit.startsWith("lle")

console.log(s4)
console.log(s5)
console.log(s6)
console.log(s7)

// program 4
let vegetable = "brinjal"
// 0  1  2  3  4  5  6
// b  r  i  n  j  a  l

let s10 = vegetable.includes('i')
let s11 = vegetable.includes('in')
let s12 = vegetable.includes('inj')
console.log(s10)
console.log(s11)
console.log(s12)

let s13 = vegetable.indexOf('b')
let s14 = vegetable.indexOf('e')
console.log(s13)
console.log(s14)


// toUppercase()
// toLowercase()
// startwith()
// endswith()
// includes()
// indexof()

// program 5
let a11 = 'hello'
console.log(a11)

console.log(a11.length)
s15 = a11.trimStart()
console.log(s15.length)

a11 = 'hello'
console.log(a11.length)
s16 = a11.trimEnd()
console.log(s16.length)

a11 = 'hello'
s17 = a11.trim()
console.log(s17.length)

// program 6
info = 'i am learning javascript'
s18 = info.replace("javascript","python")
console.log(s18)
