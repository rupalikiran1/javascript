let students = [
    {
        firstname:"krupa",
        lastname:"kotkar",
        age:12,
        skills:["python","javascript","django"],
        city:"pune"
    },
    {
        firstname:"rupali",
        lastname:"kotkar",
        age:23,
        skills:["python","javascript","cypress"],
        city:"mumbai" 
    },
    {
        firstname:"anupama",
        lastname:"shinde",
        age:25,
        skills:["python","html","cypress"],
        city:"nagpur" 
    },
    {
        firstname:"nita",
        lastname:"rao",
        age:35,
        skills:["testing","html","cypress"],
        city:"pune"
    }
]
// firstname of all students
console.log(students[1].firstname)
for(let i =0; i < students.length; i++){
    console.log(students[i].firstname)
}
// student with pune city
for(let i = 0; i < students.length; i++){
    if(students[i].city === "pune"){
        console.log(students[i].firstname)
    }
}

// student in pune and age above 30
for(let i = 0; i < students.length ; i++){
    if(students[i].age > 30 && students[i].city === 'pune'){
        console.log(students[i].firstname)
    }
}
// add css skill to every students
for (let i = 0; i < students.length; i++){
    students[i].skills.push("css")
}
console.log(students)

// name : number of skills
for(let i = 0 ; i< students.length ; i++){
    console.log(students[i].firstname +":" + students[i].skills.length)
}

// average age of all students
let a1 = students.reduce(function(acc,el){
    return el.age + acc

},0)
console.log(a1/students.length)
