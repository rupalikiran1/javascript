// program 1
//             0       1     2
let names = ["krupa","sona","mona"]

let a = names[0]
let b = names[1]
let c = names[2]

console.log(a)
console.log(b)
console.log(c)

let [a1,b1,c1] = names
console.log(a1)
console.log(b1)
console.log(c1)

// program 2
let fruits = ["apple","mango","banana"]
let [q1,q2] = fruits
console.log(q1)
console.log(q2)

// program 3
//               0                          1             2
//              0          1          0         1         0        1
let cities = [["nagpur","wardha"],["bhopal","indore"],["lucknow","agra"]]
let [[c11,c22],[c44,c55],[c66,c77]] = cities
console.log(c55)

// program 4

let info = {
    firstName:"krupa",
    lastName:"kotkar"
}

let {firstName,lastName} = info
console.log(firstName)
console.log(lastName)

let vehicle = {
    color:"red",
    type:"sedane"
}
let {color:cl,type:ty} = vehicle
console.log(cl)
console.log(ty)

// program 5

let info2 = {
    fullName:"krupa kotkar",
    parent:{
        mother:"lata kotkar",
        father:"Raybhan kotkar"
    }
}
let {fullName,parent:{mother,father}} = info2
console.log(fullName)
console.log(mother)
console.log(father)

// program 6

let students = [
    {
        fn:"krupa",
        ln:"kotkar"
    },
    {
        fn:"rushi",
        ln:"pande"
    }
]

let [{fn:f1,ln:l1},{fn:f2,ln:l2}] = students
console.log(f1)
console.log(l1)
console.log(f2)
console.log(l2)

//program 6
let info3 = {
    firstName:"krupa",
    lastName:"kotkar",
    skills:["python","javascript"]
}

let {firstName:f3,lastName:l3,skills:[sub1,sub2]} = info3
console.log(f3)
console.log(l3)
console.log(sub1)
console.log(sub2)

// map()