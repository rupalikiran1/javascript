// program 1

//let pro2 = new Promise(function(resolve,reject){
//  let cities = ["pune","bangalore","kolkata"]
//if(cities.includes("pune")){
//  resolve([11,22,33])
//}
//else{
//  reject([-11,-22,-33])
//}
//})
//.then(function(a){
//  console.log(a[0])
//})
//.catch(function(b){
//  console.log(b[0])
//})

// program 2
//let pro3 = new Promise(function(resolve,reject){
//  let c = [11,22,33]
// if(c.includes(33)){
//    resolve("hello")
//}
//else{
//  reject("bye")
//}
//})
//.then(function(str){
//  console.log(str)
//})
//.catch(function(str){
//  console.log(str)
//})
//.finally(function(){
//   console.log("I will Always execute")
//})

// program 3
let pro4 = new Promise(function (resolve, reject) {
    let a = 10
    let b = 5
    if (a == b) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})
    .then(function (str) {
        console.log(str)
        return "hello2"
    })
    .then(function (str2) {
        console.log(str2)
    })
    .catch(function (str) {
        console.log(str)
    })
    .finally(function () {
        console.log("I will Always execute")
    })