//getUsersPageWise

function getUsers(pageNumber){
    return fetch('https://reqres.in/api/users?page=${pageNumber}')
    .then(function (response){
        return response.json()
    })
    .then(function (response){
        return response.data[0].id
    })
}
//getUserID
function getID(id){
    return fetch('https://reqres.in/api/users?page=${id}')
    .then(function (response){
        return response.json()
    })
    .then(function (response){
        return response.data
    })
}
//renderHtml
function renderHtml(element) {
    document.write('<h1>${element.first_name}</h1>')
    document.write('<h1>${element.last_name}</h1>')
    document.write('<h1>${element.email}</h1>')
    document.write('<h1>${element.id}<h1>')
    document.write('<img src=${element.avatar}>')
}
//async await
async function getUserInfo(pageNumber){
    let id = await getUserPage(pageNumber)
    let user = await getUserById(id)
    renderHtml(user)
}
getUserInfo(2)
