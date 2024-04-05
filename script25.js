let info = {
    first_name:"chinmay",
    last_name:"deshpande"
}

info.first_name = "ram"
info.city = "pune"

class PersonE {
    set fn(fn){
        this.first_name = fn
    }
    set ln(ln){
        this.last_name = ln
    }
    get fn(){
        return this.fn
    }
    get ln(){
        return this.ln
    }
}

let ninad = new PersonE()
ninad.fn = "ninad"
ninad.ln = "dani"