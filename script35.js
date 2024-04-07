// program 1
console.log("hello")

//program 2

var firstName = "vijeet"
var lastName = "dani"
//console.log(window.firstName)
//console.log(window.lastName)
let amol = {
    firstName:"amol",
    lastName:"rao",
    displayName:function(){
    console.log(this.firstName + this.lastName)
    let displayName2 = function(){
        console.log(this.firstName + this.lastName)
    }
    displayName2()

}
}
amol.displayName()

// program 2
let amol1= {
    firstName:"amol1",
    lastName:"rao",
    displayName:()=>{
    console.log(this.firstName + this.lastName)
    let displayName2 =() =>{
        console.log(this.firstName + this.lastName)
    }
    displayName2()

}
}
amol1.displayName()