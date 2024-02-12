
let x = 10
let y = 5

if(x > y){
    console.log("x is greater")
}
else {
    console.log("y is greater")
}


// ternary operator----one expression
// program 1
//expression ? StatementOne:StatementTwo

x > y ? console.log("x is greater"):console.log("y is greater")


// program 2

age = 18
let q1 = age >=18 ? 'can drive':'can not drive'
console.log(q1)

age = 17
let q2 = age >=18 ? 'can drive':'can not drive'
console.log(q2)

// program 3
//switch case without break
let city = "pune"
switch(city){
    case"pune":
         console.log("MH")
    case "jaipur":
          console.log("RJ")
    case "indore":
         console.log("MP")
    case "gantok":
        console.log("Assam")
    default:
        console.log("city not found")
}



let city1 = "jaipur"
switch(city1){
    case"pune":
         console.log("MH")
    case "jaipur":
          console.log("RJ")
    case "indore":
         console.log("MP")
    case "gantok":
        console.log("Assam")
    default:
        console.log("city not found")
}

// program 4
// switch case with break statement

let city3 = "pune"

switch(city3){
    
    case "pune":
        console.log("MH")
         break
    case "jaipur":
          console.log("RJ")
          break
    case "kanpur":
        console.log("UP")
        break
    case "shillong":
        console.log("meghalay")
        break
    default:
           console.log("incorrect city")
}

// program 5

let city4 = "jaipur"

switch(city4){
    case "nagpur":
    case "wardha":
        console.log("MH")
        break
    case "kanpur":
    case "varanasi":
        console.log("UP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city4")
}

// program 6
 let x1 = 10
 let x2 = 5
 let x3 = 3

 let isGreatest = true
 switch(isGreatest){

    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greater")
        break
    default:
        console.log("x3 is greater")
 }

 // or 
 let y1 = 10
 let y2 = 50
 let y3 = 300

 let isGreatest1 = true
 switch(isGreatest){

    case y1 > y2 && y1 > y3:
        console.log("y1 is greater")
        break
    case y2 > y1 && y2 > y3:
        console.log("y2 is greater")
        break
    default:
        console.log("y3 is greater")
 }































