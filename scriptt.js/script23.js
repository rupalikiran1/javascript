// set and get keywoed
class personD {

    set fn(fn){
        this.firstName = fn
    }
    get fn(){
        return this.firstName
    }
    set ln(ln){
        this.lastName = ln
    }
    get ln(){
        return this.lastName
    }
}

// setting class fields as properties
let shiva = new personD()
shiva.fn = "shivani"
console.log(shiva.fn)
console.log(shiva)

shiva.ln = "hedau"
console.log(shiva.ln)
console.log(shiva)