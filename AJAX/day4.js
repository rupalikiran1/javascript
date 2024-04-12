//async code ------sync
//user create -------get id -----get info

//call  ------2
//callB ------2
//callC -------2

// promise --- promise combinations -- 4 methods

//promise.race()
//promise.any()
//promise.allsettled()
//promise.all()


//Promise.all([
//Promise.resolve("hello"),
//Promise.resolve("bye"),
//Promise.reject("hello c")
//])
//.catch(function(){
//   console.log("all not resolved")
//})
//program 2
//Promise.allSettled([
//  Promise.resolve("hello"),
//Promise.resolve("bye"),
//Promise.reject("hello c")
//])
//.then(function(arr){
//  console.log("arr")
//})

// promise.race()

function proOne() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("hello")
        }, 3000)
    })
}
function proTwo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject("bye")
        }, 2000)
    })
}
Promise.race([
    proOne(),
    proTwo()
])
    .then(function (str) {
        console.log(str)
    })
    .catch(function (str) {
        console.log(str)
    })

// promise.any()
Promise.any([
    Promise.reject("bye"),
    Promise.reject("bye2"),
     Promise.reject("bye3")
])