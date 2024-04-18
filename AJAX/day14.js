async function getUser(id){
    try {
        const response = await fetch('https://reqres.in/api/users/${id}')
        //console.log(response)
        if(!response.ok){
            throw new Error("Failed to fetch users")
        }
        let data = await response.json()
        //console.log(response)
        return data.data
     }
     catch(err){
        console.error('Error while fetching the response',err)
        throw err;
     }
}

function raceP(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('function called...race!')
        },1)
    })
}



// promise.All()
//async function PromiseAll(){
    //try{
// let [user1,user2,user3] = await promise.all([
    // getUser(1),
    //getUser(2),
    //getUser(3)
//])
// console.log(user1)
//console.log(user2)
//console.log(user3)
//}
//catch(err){
   // console.log('error while fetching the users : ',err)

//}
//}
//PromiseAll()
async function PromiseAllSettled(){
    try{
        let arr = await Promise.allSettled([
            getUser(1),
            getUser(1),
            getUser(1),
            Promise.reject("bye")

        ])
        arr.forEach(function(el){
            if(el.status == "fulfilled"){
                console.log(el.value)
            }
            else{
                console.log(el.reason)
            }
        })
        console.log(arr)
    }
    catch(err){
        console.log('error while fetching the users : ',err)
    }
}

PromiseAllSettled()

//promise.any()
//async function promiseAny(){
    //try{
       // let user = await Promise.any([
        //    Promise.reject("rejected"),
            // console.log(user1)
//console.log(user2)
//console.log(user3)

//        ])
  //      console.log(user)
    //}
    //catch(err){
      //  console.log('error while fetching the users : ',err)
//}
//}
//promiseAny()

//async function promiseRace(){
    //try{
        // let user = await promise.race([
          //  getUser(1),
            //raceP()
        //])
      //  console.log(user)
   // }
  //catch(err){
   // console.log('error while fetching the users : ',err)
//}
//}
//promiseRace2

