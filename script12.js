// object ----- properties and methods

let info = ["krupa","kotkar",25,2]

let krupa = {
    // key:values
    //property:values
    firstname:"krupa",
    lastname:"kotkar",
    age:25,
    rollno:2
}
console.log(krupa)

//retrive(dot notation bracket notation)
console.log(krupa.firstname)
console.log(krupa['firstname'])

// update(dot notation and bracket notation)
krupa.lastname = "kotkar"
krupa['lastname'] = "kotkar"
console.log(krupa)

// add
krupa['language'] = "marathi"
krupa.city = "pune"
console.log(krupa)

// delete
//delete krupa.firstname
// delete krupa['lastname']

// program 1
//vehicle = {
    //color:"red"
    //type:"sedane"
// }
//retrive // update // add // delete
// console.log(vehicle.color)
// vehicle.color = "blue"
// vehicle.regno = 123
// delete vehicle.colo

// bracket notation
// console.log(vehicle['color'])
// vehicle['color'] = "blue"
// vehicle['regno'] = 123
// delete vehicle['regno']

let names = ["krupa","raj","rushi","ravi"]
 for(let i = 0;i<names.length;i++){
     console.log(i)
     console.log(names[i])
}

let ninad = {
    // property:values
    firstname:"ninad",
    lastname:"dani",
    age:25,
    rollno:2
}
// console.log(ninad['firstname'])
for(let prop in ninad){
    console.log(prop,ninad[prop])
}

let krupa2 = {
    // property:values
    firstname:"krupa",
    lastname:"gund",
    age:22,
    rollno:21
}
// console.log(krupa['firstname'])
for(let x  in krupa2){
    console.log(x ,krupa2[x])
}

let students = [
    {
        firstname:"parul",
        lastname:"gund",
        age:22
    },
    {
        firstname:"rushi",
        lastname:"dani",
        age:25
    },
    {
        firstname:"mona",
        lastname:"kotkar",
        age:21
    }
]
console.log(students[2].firstname)



