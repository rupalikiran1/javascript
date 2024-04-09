// program 3
// usercreate  ------- getid  ---------getinfo

let pro = new Promise(function(resolve,reject){
    let a = 10
    let b = 10

    if(a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})

// PROGRAM 4
let pro1 = new Promise(function(resolve,reject){
    let a = 10
    let b = 15

    if(a == b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})
pro1.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})


