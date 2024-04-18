function getUserbyId(id){
    return fetch('https://reqres.in/api/users/${id}')
    .then(function (response){
        return response.json()
    })
    .then(function (response){
        return response.data
    })
}

function raceP() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('refresh')
        },1)
            
    })
}
function renderHtml(element) {
    document.write('<h1>${element.first_name}</h1>')
    document.write('<h1>${element.last_name}</h1>')
    document.write('<h1>${element.email}</h1>')
    document.write('<h1>${element.id}<h1>')
    document.write('<img src=${element.avatar}>')
}

//promise.any()

Promise.any([
    Promise.reject("bye"),
    raceP(),
    getUserbyId(2)
])
.then(function(str){
    console.log(str)
})