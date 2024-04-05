// let chinmay = {
//  firstName:"chinmay",
//  lastName:"deshpande",
// displayName:function(){
// 
// }
// let vijeet = {
// firstName:"vijeet",
// lastName:"dani"
// }

// let displayName2 = chinmay.displayName

// let displayName2 = function(){
//console.log(this.firstName + this.lastName)
// }
//displayName2()

// bind
// let q = displayName2.bind(vijeet)
// let q = function(){
// console.log(vijeet.firstName + vijeet.lastName)
// }
// }
//q()

// program 2

let shivani = {
    firstName:"shivani",
    lastName:"hedau"
}

let hrushali = {
    firstName:"hrushali",
    lastName:"patil"

}

let vedant = {
    firstName:"vedant",
    lastName:"gaikwad"

}
let displayName4 = function(a){
    console.log(this.firstName + this.lastName)
    //console.log(vijeet)
}
displayName4.call(shivani,"hello")
displayName4.call(hrushali,"hello")
displayName4.call(vedant,"hello")

// apply
displayName4.apply(shivani,["bye","hi","bye","good bye","tc"])


//let a = chinmay.displayName

// let a = function(){
// console.log(this.firstName + this.lastName)
//}
// a()
// chinmay.a()
//vijeet.a()

//function declaration
function displayColor(cl){
    return cl + "G"
}
let r = displayColor("green")
console.log(r)

let displayColor3 = function(cl){
    return cl + "G"
}
let r2 = displayColor3("green")
console.log(r2)
//let displayColor4 = (cl)=>{
// return cl + "G" 
//}
// let r3 = displayColor4("green")
// console.log(r3)

let displayColor4 = (cl)=>cl + "G"
let r3 = displayColor4("green")
console.log(r3)
