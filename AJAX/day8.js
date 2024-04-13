function getUserPage(pageNumber) {

    return fetch('https://reqres.in/api/users?page=${pageNumber}')
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response) {
            //console.log(response.data[0].id)
            return response.data[0].id
        })
}
function getUserById(Id) {

    return fetch('https://reqres.in/api/users?page=${Id}')
        .then(function (response) {
            console.log(response)
            return response.json()
        })
        .then(function (response) {
            //console.log(response.data[0].id)
            return response.data
        })
}
function renderHtml(el) {
    document.write('<h1>${el.first_name}</h1>')
    document.write('<h1>${el.last_name}</h1>')
    document.write('<p>${el.email}</p>')
    document.write('<h1>${el.id}<h1>')
    document.write('<img src=${el.avatar}>')
}

//getUserPage(1)
//.then(function(id){
  //  return getUserById(id)
//})
//.then(function(obj){
    //console.log(el)
  //  renderHtml(obj)
//})

async function getUserInfo(pageNumber){
    let id = await getUserPage(pageNumber)
    let user = await getUserById(id)
}
getUserInfo(2)
