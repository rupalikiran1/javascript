// console.log(students[1].firstname)
// console.log(students[1].skills[2])
// student[1].skills.push("selenium")

let students = [
    {
        firstname : "krupa",
        lastname : "kotkar",
        age : 12,
        skills : ["python","javascript","django"],
        city : "pune"
    },
    {
        firstname : "sona",
        lastname : "kotkar",
        age : 23,
        skills : ["python","javascript","cypress"],
        city : "mumbai"
    },
    {
        firstname : "amol",
        lastname : "rao",
        age : 25,
        skills:["python","html","cypres"],
        city : "nagpur"
    },
    {
        firstname : "mayuri",
        lastname : "rao",
        age : 35,
        skills:["testing","html","cypress"],
        city : "pune"
    }

]

// firstname of all students -
for(let i = 0; i < students.length;i++){
    console.log(students[i].firstname)
}
students.forEach(function(el){
    console.log(el.firstname)
    console.log(el['firstname'])
})

// student with pune city -
for(let i = 0; i < students.length ; i++){
    if(students[i].city == "pune"){
        console.log(students[i].firstname)
    }
}
students.forEach(function(el){
    if(el.city == "pune"){
        console.log(el.firstname)
    }
})
let r1 = students.filter(function(el){
    return(el.city == "pune")
})
console.log(r1)
r1.forEach(function(el){
    console.log(el.firstname)
})
// student.filter(function(el)){
    //return el.city == "pune"
    //}).foreach(function(el)){
        //console.log(el.firstname)
    //})

// students in pune and age above 30
students.forEach(function(el){
    if(el.city == "pune" && el.age > 30){
        console.log(el.firstname)
    }
})
// add css skill to every students
students.forEach(function(el){
    el.skills.push("css")
})
let r2 = students.map(function(el){
    el.skills.push("html5")
    return el

})
console.log(r2)
// name:numberofskills
students.forEach(function(el){
     console.log(el.firstname +":"+el.skills.length)
})

// average age of all students
let total = 0
for(let i = 0; i < students.length; i++){
    total = total + students[i].age
}
console.log(total/students.length)

let q2 = students.reduce(function(acc,el){
     return acc + el.age
},0)
console.log(q2/students.length)



