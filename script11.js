// splice()
//             0        1        2          3           4
let cities = ["pune","mumbai","bangalore","kolkata","chennai"]
//cities.pop()
//cities.shift()
//cities.splice(index,numberofToBeDeleted)

 // cities.splice(1,2)
// console.log(cities)
// cities.splice(2,1)
// cities.splice(1,2,"nagpur","wardha","goa")

// fill()
//           0  1  2  3  4  5  6
let numA = [11,22,33,44,55,66,77]
let q = numA.fill('@',1,5)
console.log(q)

// flat()
//                   0                     1                  2
//                  0       1         0        1         0       1
let states = [["nagpur","wardha"],["bhopal","indore"],["aipur","udaipur"]]
console.log(states[0][1])
console.log(states[1][1])
console.log(states[2][1])
let a1 = states.flat()
console.log(a1)

// sort(only alphabets)
let fruits = ["apple","banana","grapes","chikoo"]
fruits.sort()
console.log(fruits)

// at()
//          0    1   2  3    4   5   6
let a11 = [111,222,333,444,555,6666,7777]
let b11 = a11.indexOf(333)
let b12 = a11.at(3)
console.log(b11)
console.log(b12)

// join()
let info = ["krupa","kotkar",7744087820]
let b2 = info.join(' ')
console.log(b2)
console.log(typeof b2)

// reverse()

let n = [11,22,33]
n.reverse()
console.log(n)

// concat()

let a = [11,22,33]
let b = [44,55,66]
let c = a.concat(b)
console.log(c)
