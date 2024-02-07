console.log("hello")

let a = 10
console.log(a)
a = 100
console.log(a)

const h = 10
console.log(h)

// program 2

let a1 = 10
let b1 = 5

console.log(a1+b1)
console.log(a1-b1)
console.log(a1*b1)
console.log(a1/b1)
console.log(a1%b1)

let x = 8
let y = 4

console.log(x+y)
console.log(x-y)
console.log(x*y)
console.log(x/y)
console.log(x%y)

// 10 pairs---50 lines

//function - keyword
//calculator - function name
//() - parenthesis
// x,y- parameter
//{} - blocks
//{---}---statements
//calculator(2,4)
//2,4 ---arguments

function calculator(x,y)
{
    console.log(x+y)
    console.log(x-y)
    console.log(x*y)
    console.log(x/y)
    console.log(x%y)
}
calculator(4,2)
calculator(14,7)


//program 5

//function without parameter and without return type

function additionA()
{
    console.log(9+9)

}
additionA()
additionA()

//function with parameter and without return type

function additionB(x,y)
{
    console.log(x+y)

}
additionB(12,3)
additionB(6,3)

//function with parameter and with return type

function additionC(x,y)
{
    return x+y
}
let q1 = additionC(13,4)
console.log(q1)


