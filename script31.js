// let amol = {
    // firstName:"amol",
    // lastName:"rao",
    // displayName:function(){
    // console.log(this.firstName + this.lastName)
    // }
// }

// console.log(amol.firstName)
// console.log(amol.lastName)
// amol.displayName()

// function constructor

// function Person(fn,ln){
// this.firstName = fn
// this.lastName = ln
// this.displayName = function(){
    // console.log(this.firstName + this.lastName)
//}
//}

class Person{
    //country = "india"
    constructor(fn,ln){
        this.firstName = fn
        this.lastName = ln
    }
    displayName(){
        console.log(this.firstName + this.lastName)

    }
}
let hemant = new Person("hemant","deshpande")
let sarika = new Person("sarika","pansare")
console.log(hemant)
console.log(sarika)
sarika.displayName()
hemant.displayName()

// object.create()
let info = {
    init:function(fn,ln){
        this.firstName = fn
        this.lastName = ln
    },
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let sarikaE = Object.create(info)
console.log(sarikaE)
sarikaE.init("sarika","pansare")
sarikaE.displayName()
