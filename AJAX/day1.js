// program 1
//function additionA(){
  //  console.log("A is executed")

//}
//function additionB(){
  //  console.log("B is executed")
//}
//additionB()
//additionA()


//program 2
//function additionA(){
  //  setTimeout(function(){
    //    console.log("A is executed")
    //},3000)
//}
//function additionB(){
  //  console.log("B is executed")
//}
//additionA()
//additionB()

// program 3
// create user ---->  get id ----->get info
function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
        console.log("get id")
    },2000)

    setTimeout(function(){
        console.log("get info")
    },1000)
}
//getInfo()

// program 4 ----async code ---- sync  --call back hell

function getInfo(){
    setTimeout(function(){
        console.log("user created"),
    setTimeout(function(){
        console.log("get id")
    setTimeout(function(){
        console.log("get info")
    },1000)
},2000)
    },3000)
}
getInfo()